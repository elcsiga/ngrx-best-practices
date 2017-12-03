import { Action } from '@ngrx/store';
import { Animal } from './common-types';

export const SET_CURRENT_ANIMAL = 'SET_CURRENT_ANIMAL';

// STATE DEFINITION

export interface AnimalViewState {
  currentAnimal: Animal;
}
const initialState = {
  currentAnimal: Animal.bear
};

// SELECTORS

// ACTIONS

export class SetCurrentAnimalAction implements Action {
  type: string = SET_CURRENT_ANIMAL;
  constructor( public currentAnimal: Animal ) {}
}

// REDUCER

export function animalViewReducer(state: AnimalViewState = initialState, action: Action): AnimalViewState {
  switch (action.type) {
    case SET_CURRENT_ANIMAL:
      return setCurrentAnimalActionHandler(state, action);
    default:
      return state;
  }
}

// ACCTION HANDLERS

function setCurrentAnimalActionHandler ( state: AnimalViewState, action: Action): AnimalViewState {
  const setCurrentAnimalAction = action as SetCurrentAnimalAction;
  return {
    currentAnimal: setCurrentAnimalAction.currentAnimal
  };
}
