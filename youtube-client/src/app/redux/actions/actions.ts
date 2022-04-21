import { createAction, props } from '@ngrx/store';
import { CardModel } from '../../shared/models/card.model';
import { ResponseItem } from '../../shared/models/response-item';

export const createCard = createAction('[Admin] Create New Card', props<{ card: CardModel }>());

export const getCards = createAction('[Admin] Get All Cards');

export const setVideos = createAction(
  '[Search] Set Searched Videos',
  props<{ videos: ResponseItem[] }>(),
);
