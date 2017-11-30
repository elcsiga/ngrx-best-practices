import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { languageReducer, LanguageState} from './app-state/language';
import { LocalizerService } from './localizer/localizer.service';
import { LocalizedButtonComponent } from './localized-button/localized-button.component';
import { dataReducer, DataState } from './app-state/data';
import { animalViewReducer, AnimalViewState } from './app-state/animalView';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface AppState {
  language: LanguageState;
  data: DataState;
  animalView: AnimalViewState;
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitchComponent,
    LocalizedButtonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      language: languageReducer,
      data: dataReducer,
      animalView: animalViewReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [LocalizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
