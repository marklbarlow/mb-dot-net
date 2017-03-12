export function convertNumberToDayOfMonth(value: number): string {
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