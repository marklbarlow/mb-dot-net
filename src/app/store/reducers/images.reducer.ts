import * as images from '../actions/images';
import { ImageMonth } from '../model';

declare var require;
const objectAssign = require('object-assign');

export interface State {
    loaded: boolean;
    loading: boolean;
    months: ImageMonth[];
}

const initialState: State = {
    loaded: false,
    loading: false,
    months: [],
};

export function reducer(state = initialState, action: images.Actions): State {
    switch (action.type) {
        case images.ActionTypes.LOAD:
            return objectAssign({}, initialState, {
                loading: true
            });

        case images.ActionTypes.LOAD_SUCCESS:
            return objectAssign({}, state, {
                loaded: true,
                loading: false,
                months: action.payload,
            });

        default:
            return state;
    }
}

export const getImages = (state: State) => state.months;