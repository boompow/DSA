export { }

let arr1 = [0, 56, 3, 4, 78, 9, 2, 3, 4, 12]

function greatestNumber(list: number[]) {
    if (!list.length) return null
    let max = list[0]

    for (let i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i]
        }
    }

    return max
}

console.log(greatestNumber(arr1))