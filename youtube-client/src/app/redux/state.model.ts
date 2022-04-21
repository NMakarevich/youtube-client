import { CardModel } from '../shared/models/card.model';
import { ResponseItemById } from '../shared/models/response-item-by-id';

export interface CardsState {
  cards: CardModel[];
  videos: ResponseItemById[];
}

export const initialState: CardsState = {
  cards: [],
  videos: [],
};
