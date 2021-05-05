export function getGroupName(index: number) {
    const min = index * 10 + 1;
    const max = min + 9;

    return `${min}-${max}`;
}
