import {leadingZero} from "./leadingZero";

export function parseDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${leadingZero(day, 2)}.${leadingZero(month, 2)}.${year}`;
}
