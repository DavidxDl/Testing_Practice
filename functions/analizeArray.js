export default function analizeArray(arr = []) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const average = arr.reduce((prev, curr) => prev += curr) / arr.length
    return {
        average,
        min,
        max,
        length: arr.length
    }
}