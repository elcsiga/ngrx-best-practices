import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../app.module';
import { SetCurrentLanguageAction } from '../app-state/language';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.css']
})
export class LanguageSwitchComponent implements OnInit, OnDestroy {
  private currentLanguage: string = '';
  private subscription: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select( state => state.language.currentLanguage)
      .subscribe( currentLanguage => this.currentLanguage = currentLanguage);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  changeCurrentLanguage(lang: string): void {
    this.store.dispatch(new SetCurrentLanguageAction(lang));
  }

  isCurrentLanguage (lang: string): boolean {
    return lang === this.currentLanguage;
  }
}
