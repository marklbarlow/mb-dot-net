import { LoadAction } from './load.action';
import { LoadFailAction } from './load-fail.action';
import { LoadSuccessAction } from './load-success.action';

export type Actions
    = LoadAction
    | LoadFailAction
    | LoadSuccessAction;