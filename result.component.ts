import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() score: number = 0;
  @Input() total: number = 0;
  @Output() restart = new EventEmitter<void>();

  getPercentage() {
    return (this.score / this.total) * 100;
  }
}
