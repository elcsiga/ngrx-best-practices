import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.module';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private currentLanguage$: Observable<string>;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.currentLanguage$ = this.store.select( state => state.language.currentLanguage);
  }
}
