export function leadingZero(num: number, size: number) {
    return String(num).padStart(size, `0`);
}
