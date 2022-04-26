import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { createCard } from '../../../redux/actions/actions';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  public formCard!: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) {}

  ngOnInit(): void {
    this.formCard = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', Validators.maxLength(255)],
      img: ['', [Validators.required, this.validateURL(['png', 'jpg', 'jpeg'])]],
      video: ['', [Validators.required, this.validateURL(['mp4', 'avi'])]],
      date: ['', [Validators.required, this.validateDate]],
    });
  }

  validateURL(formats: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let isValid: boolean;
      const formatMatch = formats
        .map((format) => format == control.value.slice(-format.length))
        .includes(true);
      try {
        new URL(control.value);
        isValid = true;
      } catch (e) {
        console.error(e);
        isValid = false;
      }
      return isValid && formatMatch ? null : { validateURL: 'The link is invalid' };
    };
  }

  validateDate(control: AbstractControl) {
    const enteredDate = new Date(control.value);
    const now = new Date();
    return now.getTime() > enteredDate.getTime() ? null : { validateDate: 'The date is invalid' };
  }

  get title() {
    return this.formCard.get('title');
  }

  get description() {
    return this.formCard.get('description');
  }

  get img() {
    return this.formCard.get('img');
  }

  get video() {
    return this.formCard.get('video');
  }

  get date() {
    return this.formCard.get('date');
  }

  createCard() {
    if (this.formCard.invalid) return;
    this.store.dispatch(createCard({ card: this.formCard.value }));
    this.formCard.reset();
  }
}
