import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JokeType } from 'src/app/models/jokeType';

@Component({
  selector: 'app-jokes-form',
  templateUrl: './jokes-form.component.html',
  styleUrls: ['./jokes-form.component.scss'],
})
export class JokesFormComponent implements OnInit {
  @Output() addJokeOutputEvent = new EventEmitter<JokeType>();

  jokeForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  addJoke(): void {
    this.jokeForm.markAllAsTouched();

    if (this.jokeForm.valid) {
      this.addJokeOutputEvent.emit(this.jokeForm.value);
      this.jokeForm.reset();
    }
  }

  buildForm(): void {
    this.jokeForm = this.fb.group({
      question: ['', [Validators.required]],
      punchline: ['', [Validators.required]],
    });
  }
}
