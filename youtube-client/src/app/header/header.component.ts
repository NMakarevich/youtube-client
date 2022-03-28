import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isOpened: boolean = false;

  @Output() isOpenedChange = new EventEmitter<boolean>();

  public userName = 'User Name';

  toggle() {
    this.isOpened = !this.isOpened;
    this.isOpenedChange.emit(this.isOpened);
  }
}
