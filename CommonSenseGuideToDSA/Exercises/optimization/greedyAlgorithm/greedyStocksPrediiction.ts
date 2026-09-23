export { }

const arr1 = [22, 25, 21, 18, 19.6, 17, 16, 20.5]
const arr2 = [5, 2, 8, 4, 3, 7]

function findStockUpTrend(list: number[]) {
    let left = list[0]
    let middle = Infinity
    let right = Infinity

    for (let num of list) {
        if (num <= left) {
            left = num
        } else if (num > left && num <= middle) {
            middle = num
        } else {
            right = num
            return {
                hasUpwardTrend: true,
                values: [left, middle, right]
            }
        }
    }

    return {
        hasUpwardTrend: false,
    }
}

console.log(findStockUpTrend(arr1))