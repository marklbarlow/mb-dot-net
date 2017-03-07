import * as images from '../actions/images';
import { Image, ImageMonth } from '../model';

declare var require;
const objectAssign = require('object-assign');

export interface State {
    isEditing: boolean;
    isNew: boolean;
    loaded: boolean;
    loading: boolean;
    months: ImageMonth[];
    selectedImage: Image;
    selectedMonth: ImageMonth;
}

const initialState: State = {
    isEditing: false,
    isNew: false,
    loaded: false,
    loading: false,
    months: [],
    selectedImage: undefined,
    selectedMonth: undefined,
};

export function reducer(state = initialState, action: images.Actions): State {
    switch (action.type) {
        case images.ActionTypes.ADD_IMAGE:
            return {
                isEditing: true,
                isNew: true,
                loaded: true,
                loading: false,
                months: state.months,
                selectedImage: undefined,
                selectedMonth: state.selectedMonth,
            };

        case images.ActionTypes.EDIT_IMAGE:
            return {
                isEditing: true,
                isNew: false,
                loaded: true,
                loading: false,
                months: state.months,
                selectedImage: action.payload,
                selectedMonth: state.selectedMonth,
            };
        case images.ActionTypes.LOAD:
            return objectAssign({}, initialState, {
                loading: true
            });

        case images.ActionTypes.LOAD_SUCCESS:
            return objectAssign({}, state, {
                loaded: true,
                loading: false,
                months: action.payload,
                selectedMonth: action.payload.length > 0 ? action.payload[0] : undefined,
            });

        // case images.ActionTypes.SAVE_IMAGE:
        // return{
        //     selectedImage:action.payload
        // }

        case images.ActionTypes.SELECT_IMAGE:
            return objectAssign({}, state, {
                selectedImage: action.payload,
            });

        case images.ActionTypes.SELECT_MONTH:
            return objectAssign({}, state, {
                selectedImage: undefined,
                selectedMonth: action.payload,
            });

        default:
            return state;
    }
}

export const getImages = (state: State) => state.months;
export const getSelectedImage = (state: State) => state.selectedImage;
export const getSelectedMonth = (state: State) => state.selectedMonth;
export const getIsLoading = (state: State) => state.loading;