import { Action } from '@ngrx/store';
import { Image, Month } from '../model';

export const ActionTypes = new class {
    readonly ADD_IMAGE = '[Images] Add Image';
    readonly EDIT_IMAGE = '[Images] Edit Image';
    readonly SAVE_IMAGE = '[Images] Save Image';
    readonly SAVE_IMAGE_SUCCESS = '[Images] Save Image Success';
    readonly SAVE_IMAGE_FAIL = '[Images] Save Image Fail';
    readonly SELECT_MONTH = '[Images] Select Month';
    readonly DELETE_IMAGE = '[Images] Delete Image';
    readonly DELETE_IMAGE_SUCCESS = '[Images] Delete Image Success';
    readonly DELETE_IMAGE_FAIL = '[Images] Delete Image Fail';
    readonly LOAD_MONTH_LIST = '[Images] Load Month List';
    readonly LOAD_MONTH_LIST_SUCCESS = '[Images] Load Month List Success';
    readonly ADD_MONTH = '[Images] Add Month';
    readonly ADD_MONTH_SUCCESS = '[Images] Add Month Success';
    readonly ADD_MONTH_FAIL = '[Images] Add Month Fail';
    readonly DELETE_MONTH = '[Images] Delete Month';
    readonly DELETE_MONTH_SUCCESS = '[Images] Delete Month Success';
    readonly DELETE_MONTH_FAIL = '[Images] Delete Month Fail';
}();

export class SelectMonthAction implements Action {
    readonly type = ActionTypes.SELECT_MONTH;

    constructor(public payload: Month) { }
}

export class AddImageAction implements Action {
    readonly type = ActionTypes.ADD_IMAGE;
}

export class EditImageAction implements Action {
    readonly type = ActionTypes.EDIT_IMAGE;

    constructor(public payload: Image) { }
}

export class SaveImageAction implements Action {
    readonly type = ActionTypes.SAVE_IMAGE;

    constructor(public payload: { month: Month, image: Image, fullImage: any, thumbnailImage: any }) { }
}

export class SaveImageSuccessAction implements Action {
    readonly type = ActionTypes.SAVE_IMAGE_SUCCESS;

    constructor(public payload: Image) { }
}

export class SaveImageFailAction implements Action {
    readonly type = ActionTypes.SAVE_IMAGE_FAIL;

    constructor(public payload: string) { }
}

export class AddMonthAction implements Action {
    readonly type = ActionTypes.ADD_MONTH;

    constructor(public payload: { month: string, numberOfDays: number }) { }
}

export class AddMonthSuccessAction implements Action {
    readonly type = ActionTypes.ADD_MONTH_SUCCESS;
}

export class AddMonthFailAction implements Action {
    readonly type = ActionTypes.ADD_MONTH_FAIL;

    constructor(public payload: string) { }
}

export class DeleteMonthAction implements Action {
    readonly type = ActionTypes.DELETE_MONTH;

    constructor(public payload: Month) { }
}

export class DeleteMonthSuccessAction implements Action {
    readonly type = ActionTypes.DELETE_MONTH_SUCCESS;
}

export class DeleteMonthFailAction implements Action {
    readonly type = ActionTypes.DELETE_MONTH_FAIL;
}

export class DeleteImageAction implements Action {
    readonly type = ActionTypes.DELETE_IMAGE;

    constructor(public payload: { month: Month, image: Image }) { }
}

export class DeleteImageSuccessAction implements Action {
    readonly type = ActionTypes.DELETE_IMAGE_SUCCESS;
}

export class DeleteImageFailAction implements Action {
    readonly type = ActionTypes.DELETE_IMAGE_FAIL;
}

export class LoadMonthListAction implements Action {
    readonly type = ActionTypes.LOAD_MONTH_LIST;
}

export class LoadMonthListSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_MONTH_LIST_SUCCESS;

    constructor(public payload: Month[]) { }
}

export type Actions
    = AddImageAction
    | EditImageAction
    | SaveImageAction
    | SaveImageFailAction
    | SaveImageSuccessAction
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