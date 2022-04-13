import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent implements OnInit {
  public formCard!: FormGroup;

  public date!: AbstractControl;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCard = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', Validators.maxLength(255)],
      img: ['', [Validators.required, this.validateURL]],
      video: ['', [Validators.required, this.validateURL]],
      date: ['', [Validators.required, this.validateDate]],
    });
  }

  validateURL(control: AbstractControl) {
    let isValid: boolean;
    try {
      new URL(control.value);
    } catch (e) {}
    isValid = true;
    return isValid ? null : { invalid: 'The link is invalid' };
  }

  validateDate(control: AbstractControl) {
    const enteredDate = new Date(control.value);
    const now = new Date();
    return now.getTime() > enteredDate.getTime() ? null : { invalid: 'choose later date' };
  }

  createCard() {
    if (this.formCard.invalid) return;
  }
}
