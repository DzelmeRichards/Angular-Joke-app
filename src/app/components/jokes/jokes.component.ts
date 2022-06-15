import { Component } from '@angular/core';
import { JokeType } from 'src/app/models/jokeType';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent {
  jokesArray = [
    {
      question: 'What did the cheese say when it looked in the mirror?',
      punchline: 'Hello-me (Halloumi)',
    },
    {
      question: 'What kind of cheese do you use to disguise a small horse?',
      punchline: 'Mask-a-pony (Mascarpone)',
    },
    {
      question: 'A kid threw a lump of cheddar at me',
      punchline: 'I thought ‘That’s not very mature’',
    },
    {
      question: 'What do you call a fake noodle?',
      punchline: 'An Impasta',
    },
    {
      question: 'What kind of cheese do you use to disguise a small horse?',
      punchline: 'Mask-a-pony (Mascarpone)',
    },
  ] as JokeType[];

  addJoke(joke: JokeType): void {
    this.jokesArray = [...this.jokesArray, joke];
  }

  deleteJoke(index: number): void {
    this.jokesArray.splice(index, 1);
  }
}
