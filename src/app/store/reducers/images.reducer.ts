import * as images from '../actions/images';
import { ImageMonth } from '../model';

export interface State {
    months: ImageMonth[];
}

const initialState: State = {
    months: [],
};

export function reducer(state = initialState, action: images.Actions): State {
    switch (action.type) {
        case images.ActionTypes.UPDATE_ALL:
            return {
                months: action.payload,
            };
        default:
            return state;
    }
}

export const getImages = (state: State) => state.months;