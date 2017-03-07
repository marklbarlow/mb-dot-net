import * as overlay from '../actions/overlay';
import { ImageMonth } from '../model';

declare var require;
const objectAssign = require('object-assign');
const comingSoonUrl = 'https://firebasestorage.googleapis.com/v0/b/website-a49d3.appspot.com/o/photo365%2Fcoming-soon.jpg?alt=media&token=efa0efa4-4e6d-4bf1-b183-3404e0042707';

export interface State {
    imageMonth: ImageMonth;
    isOpen: boolean;
    selectedIndex: number;
}

const initialState: State = {
    imageMonth: undefined,
    isOpen: false,
    selectedIndex: -1
};

export function reducer(state = initialState, action: overlay.Actions): State {
    switch (action.type) {

        case overlay.ActionTypes.OVERLAY_CLOSE:
            return objectAssign({}, state, {
                isOpen: false
            });

        case overlay.ActionTypes.OVERLAY_NEXT:
            return objectAssign({}, state, {
                selectedIndex: state.selectedIndex + 1,
            });

        case overlay.ActionTypes.OVERLAY_OPEN:
            return {
                imageMonth: action.payload.imageMonth,
                isOpen: true,
                selectedIndex: action.payload.index,
            };

        case overlay.ActionTypes.OVERLAY_PREVIOUS:
            return objectAssign({}, state, {
                selectedIndex: state.selectedIndex - 1,
            });

        default:
            return state;
    }
}

export const getHasNext = (state: State) => state.selectedIndex < state.imageMonth.images.length - 1;
export const getHasPrevious = (state: State) => state.selectedIndex > 0;
export const getImageText = (state: State) => {
    const image = state.imageMonth.images[state.selectedIndex];
    return `${image.prompt} - ${image.dayOfMonth} ${state.imageMonth.month}`;
};
export const getImageUrl = (state: State) => {
    const image = state.imageMonth.images[state.selectedIndex];
    return image.url ? image.url : comingSoonUrl;
};
export const getIsOpen = (state: State) => state.isOpen;