import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-background-loading',
  animations: [
    trigger('loadingAnimation', [
      state('start', style({
        height: '100vh',
        opacity: 1,
        backgroundColor: '#333333'
      })),
      state('end', style({
        height: '100vh',
        opacity: 0.4,
        backgroundColor: '#111111'
      })),
      transition('*<=>*', [
        animate('1.0s')
      ]),
    ]),
  ],
  templateUrl: './background-loading.component.html',
  styleUrls: ['./background-loading.component.css']
})
export class BackgroundLoadingComponent {

  private state;

  constructor() {
  }

  onDone($event) {
    this.state = this.state === 'start' ? 'end' : 'start';
  }
}
