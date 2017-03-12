import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mb-add-edit-month-dialog',
    templateUrl: './add-edit-month-dialog.component.html'
})
export class AddEditMonthDialogComponent {
    @Input() month: string;
    @Input() numberOfDays: number;

    public days: number[] = [28, 29, 30, 31];

    constructor(private dialogRef: MdDialogRef<AddEditMonthDialogComponent>) {
    }

    public onSave(): void {
        this.dialogRef.close(true);
    }
}