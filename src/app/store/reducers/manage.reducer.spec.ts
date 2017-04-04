import * as actions from '../actions/manage';
import * as manage from './manage.reducer';
import { Image, Month } from '../model';

describe('Manage Reducer', () => {
    it('can request to add image', () => {
        const action = new actions.AddImageAction();
        const result = manage.reducer(undefined, action);
        expect(result.isEditing).toEqual(true);
        expect(result.isNew).toEqual(true);
    });

    it('can request to edit image', () => {
        const image: Image = {
            dayOfMonth: 1,
            hidden: false,
            imageUrl: '',
            prompt: 'Test prompt',
            thumbnailUrl: '',
        };

        const action = new actions.EditImageAction(image);
        const result = manage.reducer(undefined, action);
        expect(result.isEditing).toEqual(true);
        expect(result.isNew).toEqual(false);
        expect(result.selectedImage).toBe(image);
    });

    it('can select a month', () => {
        const month: Month = {
            name: 'Test Month',
            numberOfDays: 30,
        };

        const action = new actions.SelectMonthAction(month);
        const result = manage.reducer(undefined, action);
        expect(result.selectedMonth).toBe(month);
    });

    it('months succesfully loaded', () => {
        const month: Month = {
            name: 'Test Month',
            numberOfDays: 30,
        };

        const action = new actions.LoadMonthListSuccessAction([month]);
        const result = manage.reducer(undefined, action);
        expect(result.monthsList[0]).toBe(month);
        expect(result.selectedMonth).toBe(month);
    });
});