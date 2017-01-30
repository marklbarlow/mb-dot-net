import { Action } from '@ngrx/store';
import { ActionTypes } from './action-types';

export class LoadAction implements Action {
    type = ActionTypes.LOAD;

    constructor() {
    }
}