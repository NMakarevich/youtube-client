import * as Cards from '../actions/actions';
import { Action, createReducer, on } from '@ngrx/store';
import { CardsState, initialState } from '../state.model';

const reducer = createReducer(
  initialState,
  on(Cards.getCards, (state) => {
    console.log(state);
    return { ...state };
  }),
  on(Cards.createCard, (state, { card }): CardsState => {
    return { ...state, cards: [...state.cards, card] };
  }),
  on(Cards.setVideos, (state, { videos }): CardsState => {
    return { ...state, videos: [...state.videos, ...videos] };
  }),
);

export function cardReucer(state: CardsState, action: Action) {
  return reducer(state, action);
}
