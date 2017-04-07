import { Action } from '@ngrx/store';
import { ImageMonth } from '../model';

export const ActionTypes = new class {
    readonly LOAD = '[Images] Load';
    readonly LOAD_SUCCESS = '[Images] Load Success';
    readonly LOAD_FAIL = '[Images] Load Fail';
}();

export class LoadAction implements Action {
    readonly type = ActionTypes.LOAD;
}

export class LoadFailAction implements Action {
    readonly type = ActionTypes.LOAD_FAIL;

    constructor(public payload: string) {
    }
}

export class LoadSuccessAction implements Action {
    readonly type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: ImageMonth[]) {
    }
}

export type Actions
    = LoadAction
    | LoadFailAction
    | LoadSuccessAction;