import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.module';
import { Observable } from 'rxjs/Observable';
import { SetCurrentAnimalAction } from './app-state/animalView';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private animalDetails$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // animalDetails$ is an observable ($ ending is a common notation for that)
    // it can be used with async pipe in the template (ng2+ only), too
    // (no subscriptions and unsubscribe() are needed this way)

    // animalDetails$ is custom composite selector, using three state segments:
    // - state.animalView.currentAnimal
    // - state.language.currentLanguage
    // - state.data.animals
    // and returns the REFERENCE of the current animal's description in the current language

    this.animalDetails$ = this.store.select(
      state => state.data.animals.find( data => (
        data.animal === state.animalView.currentAnimal &&
        data.language === state.language.currentLanguage
      )).text
    );
  }

  selectAnimal(animal) : void {
    this.store.dispatch( new SetCurrentAnimalAction(animal));
  }
}
