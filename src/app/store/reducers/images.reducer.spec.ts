import * as actions from '../actions/images';
import * as gallery from './images.reducer';

describe('Gallery Reducer', () => {

    it('when images are loading, state is loading', () => {
        const loadAction = new actions.LoadAction();
        const result = gallery.reducer(undefined, loadAction);
        expect(result.loading).toEqual(true);
    });

    it('when images have loaded, state is updated', () => {
        const imageMonth = { month: 'Test', images: [undefined, undefined] };

        const nextAction = new actions.LoadSuccessAction([imageMonth]);
        const initialState: gallery.State = {
            loaded: false,
            loading: true,
            months: [],
        };
        const result = gallery.reducer(initialState, nextAction);
        expect(result.loaded).toEqual(true);
        expect(result.loading).toEqual(false);
        expect(result.months.length).toBeGreaterThan(0);
    });
});