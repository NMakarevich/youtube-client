import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../state.model';

const selectFeature = createFeatureSelector<CardsState>('cardsState');
export const selectVideos = createSelector(selectFeature, (state) => state.videos);
