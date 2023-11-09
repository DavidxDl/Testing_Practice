import analizeArray from "./functions/analizeArray.js";



test('analilzeArray 1', () => {
    expect(analizeArray([1, 2, 3, 4, 5])).toMatchObject({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
})
test('analilzeArray 2', () => {
    expect(analizeArray([11, 21, 33, 42, 54, 63])).toMatchObject({
        average: 224 / 6,
        min: 11,
        max: 63,
        length: 6
    })
})
test('analilzeArray 3', () => {
    expect(analizeArray([79, 33, 87, 65, 212, 33, 66, 123])).toMatchObject({
        average: 698 / 8,
        min: 33,
        max: 212,
        length: 8
    })
})