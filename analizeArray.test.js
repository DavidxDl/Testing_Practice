import analizeArray from "./functions/analizeArray.js";



test('analilzeArray 1', () => {
    expect(analizeArray([1, 2, 3, 4, 5])).toMatchObject({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    })
})