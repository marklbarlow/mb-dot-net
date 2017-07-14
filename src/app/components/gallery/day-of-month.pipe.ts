import { Pipe, PipeTransform } from '@angular/core';

import * as utils from '../../utils';

@Pipe({
    name: 'dayOfMonth'
})
export class DayOfMonthPipe implements PipeTransform {
    public transform(value: number) {
        return utils.convertNumberToDayOfMonth(value);
    }
}