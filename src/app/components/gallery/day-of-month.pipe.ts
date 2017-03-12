import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dayOfMonth'
})
export class DayOfMonthPipe implements PipeTransform {
    public transform(value: number) {
        if (value.toString().endsWith('1')) {
            return `${value}st`;
        }
        if (value.toString().endsWith('2')) {
            return `${value}nd`;
        }
        if (value.toString().endsWith('3')) {
            return `${value}rd`;
        }

        return `${value}th`;
    }
}