import * as actions from '../actions/overlay';
import * as overlay from './overlay.reducer';

describe('Overlay Reducer', () => {

    it('when close dialog action, dialog is closed', () => {
        const closeAction = new actions.OverlayCloseAction();
        const result = overlay.reducer(undefined, closeAction);
        expect(result.isOpen).toBeFalsy();
    });

    it('when next image is selected, index increases by 1', () => {
        const nextAction = new actions.OverlayNextAction();
        const initialState: overlay.State = {
            imageMonth: { month: 'Test', images: [undefined, undefined] },
            isOpen: true,
            selectedIndex: 0,
        };
        const result = overlay.reducer(initialState, nextAction);
        expect(result.selectedIndex).toEqual(1);
    });

    it('when previous image is selected, index reduces by 1', () => {
        const previousAction = new actions.OverlayPreviousAction();
        const initialState: overlay.State = {
            imageMonth: undefined,
            isOpen: true,
            selectedIndex: 1,
        };
        const result = overlay.reducer(initialState, previousAction);
        expect(result.selectedIndex).toEqual(0);
    });
});