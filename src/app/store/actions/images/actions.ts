import { Action } from '@ngrx/store';
import { Image, ImageMonth, Month } from '../../model';
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

    DELETE_IMAGE: type('[Images] Delete Image'),
    DELETE_IMAGE_SUCCESS: type('[Images] Delete Image Success'),
    DELETE_IMAGE_FAIL: type('[Images] Delete Image Fail'),

    LOAD_MONTH_LIST: type('[Images] Load Month List'),
    LOAD_MONTH_LIST_SUCCESS: type('[Images] Load Month List Success'),
    ADD_MONTH: type('[Images] Add Month'),
    ADD_MONTH_SUCCESS: type('[Images] Add Month Success'),
    ADD_MONTH_FAIL: type('[Images] Add Month Fail'),
    DELETE_MONTH: type('[Images] Delete Month'),
    DELETE_MONTH_SUCCESS: type('[Images] Delete Month Success'),
    DELETE_MONTH_FAIL: type('[Images] Delete Month Fail')
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

    constructor(public payload: Month) {
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

    constructor(public payload: { month: Month, image: Image, fullImage: any, thumbnailImage: any }) {
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

export class AddMonthAction implements Action {
    type = ActionTypes.ADD_MONTH;

    constructor(public payload: { month: string, numberOfDays: number }) {
    }
}

export class AddMonthSuccessAction implements Action {
    type = ActionTypes.ADD_MONTH_SUCCESS;
}

export class AddMonthFailAction implements Action {
    type = ActionTypes.ADD_MONTH_FAIL;

    constructor(public payload: string) {
    }
}

export class DeleteMonthAction implements Action {
    type = ActionTypes.DELETE_MONTH;

    constructor(public payload: Month) {
    }
}

export class DeleteMonthSuccessAction implements Action {
    type = ActionTypes.DELETE_MONTH_SUCCESS;
}

export class DeleteMonthFailAction implements Action {
    type = ActionTypes.DELETE_MONTH_FAIL;
}

export class DeleteImageAction implements Action {
    type = ActionTypes.DELETE_IMAGE;

    constructor(public payload: { month: Month, image: Image }) {
    }
}

export class DeleteImageSuccessAction implements Action {
    type = ActionTypes.DELETE_IMAGE_SUCCESS;
}

export class DeleteImageFailAction implements Action {
    type = ActionTypes.DELETE_IMAGE_FAIL;
}

export class LoadMonthListAction implements Action {
    type = ActionTypes.LOAD_MONTH_LIST;
}

export class LoadMonthListSuccessAction implements Action {
    type = ActionTypes.LOAD_MONTH_LIST_SUCCESS;

    constructor(public payload: Month[]) {
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
    | SelectMonthAction
    | AddMonthAction
    | AddMonthFailAction
    | AddMonthSuccessAction
    | DeleteMonthAction
    | DeleteMonthFailAction
    | DeleteMonthSuccessAction
    | DeleteImageAction
    | DeleteImageFailAction
    | DeleteImageSuccessAction
    | LoadMonthListAction
    | LoadMonthListSuccessAction;