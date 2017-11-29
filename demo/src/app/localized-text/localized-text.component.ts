import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { LocalizerService } from '../localizer/localizer.service';


@Component({
  selector: 'app-localized-text',
  templateUrl: './localized-text.component.html',
  styleUrls: ['./localized-text.component.css']
})
export class LocalizedTextComponent implements OnInit, OnDestroy {
  private localizedText = '';
  private subscription: any;

  @Input() text;

  constructor(
    private store: Store<AppState>,
    private localizer: LocalizerService
  ) { }

  ngOnInit() {
    this.subscription = this.store.select( state => state.language.currentLanguage)
      .subscribe( currentLanguage => this.localizedText = this.localizer.translate(this.text, currentLanguage));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
