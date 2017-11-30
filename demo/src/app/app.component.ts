import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.module';
import { Observable } from 'rxjs/Observable';
import { currentLanguageSelector } from './app-state/language';
import {SetCurrentAnimalAction} from "./app-state/animalView";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private currentLanguage$: Observable<string>;
  private details$: Observable<string>;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.currentLanguage$ = this.store.select( currentLanguageSelector);
    this.details$ = this.store.select( state => state.data.animals.find( data => {
      return data.key === state.animalView.currentAnimal;
    }).text[state.language.currentLanguage]);
  }
  selectAnimal(animal) {
    this.store.dispatch( new SetCurrentAnimalAction(animal));
  }
}
