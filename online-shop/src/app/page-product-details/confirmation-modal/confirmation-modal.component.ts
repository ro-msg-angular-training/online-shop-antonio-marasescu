import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent {
  @Output() public confirm: EventEmitter<any> = new EventEmitter<any>();
  @Input() modalText: string;
  @Input() modalId: string;

  constructor() {
  }

  onInternalConfirm(): void {
    this.confirm.emit();
  }
}
