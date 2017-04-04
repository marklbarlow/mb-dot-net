import * as images from '../actions/manage';
import { Image, Month } from '../model';

declare var require;
const objectAssign = require('object-assign');

export interface State {
    isEditing: boolean;
    isNew: boolean;
    loaded: boolean;
    loading: boolean;
    monthsList: Month[];
    selectedImage: Image;
    selectedMonth: Month;
}

const initialState: State = {
    isEditing: false,
    isNew: false,
    loaded: false,
    loading: false,
    monthsList: [],
    selectedImage: undefined,
    selectedMonth: undefined,
};

export function reducer(state = initialState, action: images.Actions): State {
    switch (action.type) {
        case images.ActionTypes.ADD_IMAGE:
            return objectAssign({}, state, {
                isEditing: true,
                isNew: true,
            });

        case images.ActionTypes.EDIT_IMAGE:
            return objectAssign({}, state, {
                isEditing: true,
                isNew: false,
                selectedImage: action.payload,
            });

        case images.ActionTypes.SELECT_MONTH:
            return objectAssign({}, state, {
                selectedImage: undefined,
                selectedMonth: action.payload,
            });

        case images.ActionTypes.LOAD_MONTH_LIST_SUCCESS:
            return objectAssign({}, state, {
                monthsList: action.payload,
                selectedMonth: action.payload.length > 0 ? action.payload[0] : undefined,
            });

        default:
            return state;
    }
}

export const getMonths = (state: State) => state.monthsList;
export const getSelectedImage = (state: State) => state.selectedImage;
export const getSelectedMonth = (state: State) => state.selectedMonth;
export const getIsLoading = (state: State) => state.loading;