import { Action } from '@ngrx/store';

export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';

export interface LanguageState {
  currentLanguage: string;
}
const initialStat6e = {
  currentLanguage: 'hu'
};

export class SetCurrentLanguageAction implements Action {
  type: string = SET_CURRENT_LANGUAGE;
  constructor( public currentLanguage: string ) {}
}

export function languageReducer(state : LanguageState = initialStat6e, action: Action): LanguageState {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      const setCurrentLaqnguageAction = action as SetCurrentLanguageAction;
      return {
        currentLanguage: setCurrentLaqnguageAction.currentLanguage
      };
    default:
      return state;
  }
}
