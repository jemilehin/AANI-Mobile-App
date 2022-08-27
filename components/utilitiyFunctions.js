export const ConvertObjectToArray = (object) => {
    const arr = []
    for (const key in object) {
        arr.push({name: [key], property: object[key]})
    }
    return arr;
}