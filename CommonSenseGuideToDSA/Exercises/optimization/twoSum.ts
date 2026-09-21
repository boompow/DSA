export { }

const arr = [2, 4, 6, 1, 7, 3, 23, 10, 5]



function twoSum(list: number[], targetSum: number) {
    let hashTable: Map<number, boolean> = new Map()

    for (let i = 0; i < list.length; i++) {
        if (hashTable.has(targetSum - list[i])) {
            return {
                hasTwoSum: true,
                values: [list[i], targetSum - list[i]]
            }
        } else {
            hashTable.set(list[i], true)
        }
    }

    return {
        hasTwoSum: false,
        values: null
    }
}

console.log(twoSum(arr, 18))