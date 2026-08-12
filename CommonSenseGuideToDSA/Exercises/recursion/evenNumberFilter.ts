export { }

function evenNumberFilter(arr: number[]): number[] {
    if (arr.length === 0) return [];

    let first = arr[0]
    let remaining = evenNumberFilter(arr.slice(1))

    if (arr[0] % 2 === 0) {
        return [first, ...remaining]
    }

    return remaining
}

console.log(evenNumberFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))