import { Action } from '@ngrx/store';
import { LanguageCode } from './common-types';

export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';

// STATE DEFINITION

export interface LanguageState {
  currentLanguage: LanguageCode;
}
const initialStat6e = {
  currentLanguage: LanguageCode.hu
};

// SELECTORS

export const currentLanguageSelector = state => state.language.currentLanguage;

// ACTIONS

export class SetCurrentLanguageAction implements Action {
  type: string = SET_CURRENT_LANGUAGE;
  constructor( public currentLanguage: LanguageCode ) {}
}

// REDUCER

export function languageReducer(state: LanguageState = initialStat6e, action: Action): LanguageState {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE:
      return setCurrentLanguageActionHandler(state, action);
    default:
      return state;
  }
}

// ACCTION HANDLERS

function setCurrentLanguageActionHandler ( state: LanguageState, action: Action): LanguageState {
  const setCurrentLaqnguageAction = action as SetCurrentLanguageAction;
  return {
    currentLanguage: setCurrentLaqnguageAction.currentLanguage
  };
}

