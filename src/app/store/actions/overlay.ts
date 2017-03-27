import { Action } from '@ngrx/store';
import { ImageMonth } from '../model';

export const ActionTypes = new class {
    readonly OVERLAY_CLOSE = '[Overlay] Close';
    readonly OVERLAY_NEXT = '[Overlay] Next';
    readonly OVERLAY_OPEN = '[Overlay] Open';
    readonly OVERLAY_PREVIOUS = '[Overlay] Previous';
};

export class OverlayCloseAction implements Action {
    readonly type = ActionTypes.OVERLAY_CLOSE;
}

export class OverlayNextAction implements Action {
    readonly type = ActionTypes.OVERLAY_NEXT;
}

export class OverlayOpenAction implements Action {
    readonly type = ActionTypes.OVERLAY_OPEN;

    constructor(public payload: { imageMonth: ImageMonth, index: number }) {
    }
}

export class OverlayPreviousAction implements Action {
    readonly type = ActionTypes.OVERLAY_PREVIOUS;
}

export type Actions
    = OverlayCloseAction
    | OverlayNextAction
    | OverlayOpenAction
    | OverlayPreviousAction;