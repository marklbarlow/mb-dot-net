import { Action } from '@ngrx/store';
import { ActionTypes } from './action-types';

export class LoadFailAction implements Action {
    type = ActionTypes.LOAD_FAIL;

    constructor(public payload: string) {
    }
}