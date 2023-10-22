export const moveArrayElement = <T>(
    fromIndex: number,
    toIndex: number,
    arr: T[]
): T[] => {
    const array = [...arr];

    const elemement = array.splice(fromIndex, 1)[0];
    array.splice(toIndex, 0, elemement);

    return array;
};

export const removeArrayElement = <T>(index: number, arr: T[]): T[] => {
    const array = [...arr];

    if (index === 0) {
        array.shift();
    } else {
        array.splice(index, index);
    }

    return array;
};
