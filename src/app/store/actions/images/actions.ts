import { Action } from '@ngrx/store';
import { Image, ImageMonth } from '../../model';
import { type } from '../../util';

export const ActionTypes = {
    ADD_IMAGE: type('[Images] Add Image'),
    EDIT_IMAGE: type('[Images] Edit Image'),
    LOAD: type('[Images] Load'),
    LOAD_SUCCESS: type('[Images] Load Success'),
    LOAD_FAIL: type('[Images] Load Fail'),
    SAVE_IMAGE: type('[Images] Save Image'),
    SAVE_IMAGE_SUCCESS: type('[Images] Save Image Success'),
    SAVE_IMAGE_FAIL: type('[Images] Save Image Fail'),
    SELECT_IMAGE: type('[Images] Select Image'),
    SELECT_MONTH: type('[Images] Select Month'),
};

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor() {
    }
}

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: string) {
    }
}

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: ImageMonth[]) {
    }
}

export class SelectMonthAction implements Action {
    type = ActionTypes.SELECT_MONTH;

    constructor(public payload: ImageMonth) {
    }
}

export class SelectImageAction implements Action {
    type = ActionTypes.SELECT_IMAGE;

    constructor(public payload: Image) {
    }
}

export class AddImageAction implements Action {
    type = ActionTypes.ADD_IMAGE;

    constructor() {
    }
}

export class EditImageAction implements Action {
    type = ActionTypes.EDIT_IMAGE;

    constructor(public payload: Image) {
    }
}

export class SaveImageAction implements Action {
    type = ActionTypes.SAVE_IMAGE;

    constructor(public image: Image, public fullImage: any, public thumbnailImage: any) {
    }
}

export class SaveImageSuccessAction implements Action {
    type = ActionTypes.SAVE_IMAGE_SUCCESS;

    constructor(public payload: Image) {
    }
}

export class SaveImageFailAction implements Action {
    type = ActionTypes.SAVE_IMAGE_FAIL;

    constructor(public payload: string) {
    }
}

export type Actions
    = AddImageAction
    | EditImageAction
    | LoadAction
    | LoadFailAction
    | LoadSuccessAction
    | SaveImageAction
    | SaveImageFailAction
    | SaveImageSuccessAction
    | SelectImageAction
    | SelectMonthAction;