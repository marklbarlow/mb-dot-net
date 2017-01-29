
import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector } from 'reselect';
import { environment } from '../../../environments/environment';
import * as fromImages from './images.reducer';

export interface State {
    gallery: fromImages.State;
}

const reducers = {
    gallery: fromImages.reducer,
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
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