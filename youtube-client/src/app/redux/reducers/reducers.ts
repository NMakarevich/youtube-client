import * as Cards from '../actions/actions';
import { createReducer, on } from '@ngrx/store';
import { CardsState, initialState } from '../state.model';

export const cardsReducer = createReducer(
  initialState,
  on(Cards.getCards, (state): CardsState => {
    return { ...state };
  }),
  on(Cards.createCard, (state, { card }): CardsState => {
    return { ...state, cards: [...state.cards, card] };
  }),
  on(Cards.setVideos, (state, { videos }): CardsState => {
    return { ...state, videos: [...videos] };
  }),
);
