export { }

let arr1 = [1, 2, 4, 5, 6, 7, 8, 9, 10]
let arr2 = [3, 6, 11, 2, 4, 5]
let arr3 = [5, 3, 3, 7]
let arr4 = [4, 1, 1, 6]

function sumSwap(list1: number[], list2: number[]) {
    const hashTable: Map<number, boolean> = new Map()
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < list1.length; i++) {
        sum1 += list1[i]
        hashTable.set(list1[i], true)
    }

    for (let j = 0; j < list2.length; j++) {
        sum2 += list2[j]
    }

    let shiftAmount = (sum1 - sum2) / 2

    for (let k = 0; k < list2.length; k++) {
        if (hashTable.has(shiftAmount + list2[k])) {
            return [shiftAmount + list2[k], list2[k]]
        }
    }

    return null

}

console.log(sumSwap(arr3, arr4))