import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Output() public confirm: EventEmitter<any> = new EventEmitter<any>();
  modalTextValue: string;
  @Input() modalId: string;

  @Input()
  set modalText(value) {
    this.modalTextValue = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

  onInternalConfirm(): void {
    this.confirm.emit();
  }
}
