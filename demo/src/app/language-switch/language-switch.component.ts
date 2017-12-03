import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { SetCurrentLanguageAction, currentLanguageSelector } from '../app-state/language';
import { LanguageCode } from '../app-state/common-types';

/*
 This is a pure container component
 Even small components can be a container if they reflect a given
 segment of the store and therefore are not reusable in other contexts
 */

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.css']
})
export class LanguageSwitchComponent implements OnInit, OnDestroy {
  private currentLanguage = LanguageCode.hu;
  private subscription: any;
  public LanguageCode = LanguageCode; // to make it available in the template, too

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select( currentLanguageSelector )
      .subscribe( currentLanguage => this.currentLanguage = currentLanguage);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  changeCurrentLanguage(language: LanguageCode): void {
    this.store.dispatch(new SetCurrentLanguageAction(language));
  }
  isCurrentLanguage (language: LanguageCode): boolean {
    return language === this.currentLanguage;
  }
}
