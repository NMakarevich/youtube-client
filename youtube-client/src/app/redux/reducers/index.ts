import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { CardsState } from '../state.model';
import { cardsReducer } from './reducers';

export interface State {
  cardsState: CardsState;
}

export const reducers: ActionReducerMap<State> = {
  cardsState: cardsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
