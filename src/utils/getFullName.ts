import {UserName} from "../types/user";

export function getFullName(name: UserName, searchValue: string) {
    const joined = `${name.title} ${name.first} ${name.last}`;

    const leftIndex = joined.toLowerCase().indexOf(searchValue.toLowerCase());
    const rightIndex = leftIndex + searchValue.length;

    const before = joined.slice(0, leftIndex);
    const found = joined.slice(leftIndex, rightIndex);
    const after = joined.slice(rightIndex)

    return {
        before,
        found,
        after
    }
}
