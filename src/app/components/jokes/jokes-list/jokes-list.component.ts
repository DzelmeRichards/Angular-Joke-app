import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeType } from '../../../models/jokeType';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss'],
})
export class JokesListComponent {
  @Input() jokesArray?: JokeType[];
  @Output() deleteJokeOutputEvent = new EventEmitter<number>();

  deleteJoke(index: number): void {
    this.deleteJokeOutputEvent.emit(index);
  }
}
