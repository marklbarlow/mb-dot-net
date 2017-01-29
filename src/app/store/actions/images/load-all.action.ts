import { Action } from '@ngrx/store';
import { ImageMonth } from '../../model';
import { ActionTypes } from './action-types';

export class LoadAllAction implements Action {
    type = ActionTypes.UPDATE_ALL;

    constructor(public payload: ImageMonth[]) { }
}