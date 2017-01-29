import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
    public transform(value: any[]) {
        if (value === undefined) {
            return undefined;
        }

        const returnValue: any[] = [];

        for (let i = value.length - 1; i >= 0; i--) {
            returnValue.push(value[i]);
        }

        return returnValue;
    }
}