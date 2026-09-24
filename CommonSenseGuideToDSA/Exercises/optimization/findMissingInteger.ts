export { }

// You’re writing a function that accepts an array of distinct integers from
// 0, 1, 2, 3…up to N. However, the array will be missing one integer, and
// your function is to return the missing one. Your job is to
// optimize the code so that it has a runtime of O(N).

let arr1 = [2, 3, 0, 6, 1, 5]
let arr2 = [8, 2, 3, 9, 4, 7, 5, 0, 6]

function findMissingInteger(list: number[]): number | null {
    const integerHashTable: Map<number, null | number> = new Map()

    for (let i = 0; i < list.length + 1; i++) {
        integerHashTable.set(i, null)
    }

    for (let int of list) {
        integerHashTable.set(int, int)
    }

    for (let [key, value] of integerHashTable.entries()) {
        if (value === null) {
            return key
        }
    }

    return null
}

console.log(findMissingInteger(arr1))