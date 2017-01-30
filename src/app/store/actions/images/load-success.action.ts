import { Action } from '@ngrx/store';
import { ImageMonth } from '../../model';
import { ActionTypes } from './action-types';

export class LoadSuccessAction implements Action {
    type = ActionTypes.LOAD_SUCCESS;

    constructor(public payload: ImageMonth[]) {
    }
}