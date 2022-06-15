import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { JokesComponent } from './components/jokes/jokes.component';
import { JokesListComponent } from './components/jokes/jokes-list/jokes-list.component';
import { JokesFormComponent } from './components/jokes/jokes-form/jokes-form.component';
import { JokesCardComponent } from './components/jokes/jokes-card/jokes-card.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    JokesListComponent,
    JokesFormComponent,
    JokesCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
