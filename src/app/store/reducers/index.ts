
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';
import { environment } from '../../../environments/environment';
import * as fromImages from './images.reducer';
import * as fromOverlay from './overlay.reducer';

export interface State {
    gallery: fromImages.State;
    overlay: fromOverlay.State;
}

const reducers = {
    gallery: fromImages.reducer,
    overlay: fromOverlay.reducer,
};

const developmentReducer: ActionReducer<State> = combineReducers(reducers); // compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getGalleryState = (state: State) => state.gallery;
export const getImages = createSelector(getGalleryState, fromImages.getImages);
export const getMonths = createSelector(getGalleryState, fromImages.getMonths);
export const getSelectedImage = createSelector(getGalleryState, fromImages.getSelectedImage);
export const getSelectedMonth = createSelector(getGalleryState, fromImages.getSelectedMonth);
export const getIsLoading = createSelector(getGalleryState, fromImages.getIsLoading);

export const getOverlayState = (state: State) => state.overlay;
export const getHasNext = createSelector(getOverlayState, fromOverlay.getHasNext);
export const getHasPrevious = createSelector(getOverlayState, fromOverlay.getHasPrevious);
export const getImageText = createSelector(getOverlayState, fromOverlay.getImageText);
export const getImageUrl = createSelector(getOverlayState, fromOverlay.getImageUrl);
export const getIsOpen = createSelector(getOverlayState, fromOverlay.getIsOpen);