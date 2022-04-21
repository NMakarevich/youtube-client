import { CardModel } from '../shared/models/card.model';
import { ResponseItem } from '../shared/models/response-item';

export interface CardsState {
  cards: CardModel[];
  videos: ResponseItem[];
}

export const initialState: CardsState = {
  cards: [],
  videos: [],
};
