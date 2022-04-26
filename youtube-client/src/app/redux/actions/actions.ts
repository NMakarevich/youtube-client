import { createAction, props } from '@ngrx/store';
import { CardModel } from '../../shared/models/card.model';
import { ResponseItemById } from '../../shared/models/response-item-by-id';

export const createCard = createAction('[Admin] Create New Card', props<{ card: CardModel }>());

export const getCards = createAction('[Admin] Get All Cards');

export const searchVideos = createAction('[Search] Search Videos', props<{ event: Event }>());

export const setVideos = createAction(
  '[Search] Set Searched Videos',
  props<{ videos: ResponseItemById[] }>(),
);
