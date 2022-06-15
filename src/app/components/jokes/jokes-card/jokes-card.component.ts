import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from 'src/app/models/jokeType';

@Component({
  selector: 'app-jokes-card',
  templateUrl: './jokes-card.component.html',
  styleUrls: ['./jokes-card.component.scss'],
})
export class JokesCardComponent {
  @Input() joke?: JokeType;
  @Output() deleteJokeOutputEvent = new EventEmitter<null>();

  showPunchline = false;

  deleteJoke(): void {
    this.deleteJokeOutputEvent.emit();
  }

  toggleShowPunchline(): void {
    this.showPunchline = !this.showPunchline;
  }
}
