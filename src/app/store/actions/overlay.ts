import { Action } from '@ngrx/store';
import { ImageMonth } from '../model';
import { type } from '../util';

export const ActionTypes = {
    OVERLAY_CLOSE: type('[Overlay] Close'),
    OVERLAY_NEXT: type('[Overlay] Next'),
    OVERLAY_OPEN: type('[Overlay] Open'),
    OVERLAY_PREVIOUS: type('[Overlay] Previous'),
};

export class OverlayCloseAction implements Action {
    type = ActionTypes.OVERLAY_CLOSE;
}

export class OverlayNextAction implements Action {
    type = ActionTypes.OVERLAY_NEXT;
}

export class OverlayOpenAction implements Action {
    type = ActionTypes.OVERLAY_OPEN;

    constructor(public payload: { imageMonth: ImageMonth, index: number }) {
    }
}

export class OverlayPreviousAction implements Action {
    type = ActionTypes.OVERLAY_PREVIOUS;
}

export type Actions
    = OverlayCloseAction
    | OverlayNextAction
    | OverlayOpenAction
    | OverlayPreviousAction;