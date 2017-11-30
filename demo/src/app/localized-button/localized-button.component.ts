import { Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.module';
import { LocalizerService } from '../localizer/localizer.service';
import { currentLanguageSelector } from '../app-state/language';

@Component({
  selector: 'app-localized-button',
  templateUrl: './localized-button.component.html',
  styleUrls: ['./localized-button.component.css']
})
export class LocalizedButtonComponent implements OnInit, OnDestroy {
  private localizedText = '';
  private subscription: any;

  @Input() text;
  @Output() clicked = new EventEmitter();

  constructor(
    private store: Store<AppState>,
    private localizer: LocalizerService
  ) { }

  ngOnInit() {
    this.subscription = this.store.select( currentLanguageSelector )
      .subscribe( currentLanguage => this.localizedText = this.localizer.translate(this.text, currentLanguage));
  }
  onClick() {
    this.clicked.emit();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
