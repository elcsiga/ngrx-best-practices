import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { languageReducer, LanguageState} from './app-state/language';
import { LocalizedTextComponent } from './localized-text/localized-text.component';
import { LocalizerService } from './localizer/localizer.service';

export interface AppState {
  language: LanguageState;
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSwitchComponent,
    LocalizedTextComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
       language: languageReducer
    })
  ],
  providers: [LocalizerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
