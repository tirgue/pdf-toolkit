export const moveArrayElement = (
    fromIndex: number,
    toIndex: number,
    arr: unknown[]
): unknown[] => {
    const array = [...arr];

    const elemement = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, elemement);

    return array;
};
