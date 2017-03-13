export function convertNumberToDayOfMonth(value: number): string {
    if (value.toString().endsWith('1') && value !== 11) {
        return `${value}st`;
    }
    if (value.toString().endsWith('2') && value !== 12) {
        return `${value}nd`;
    }
    if (value.toString().endsWith('3') && value !== 13) {
        return `${value}rd`;
    }

    return `${value}th`;
}