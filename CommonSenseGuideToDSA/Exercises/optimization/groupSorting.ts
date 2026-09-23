export { }

let arr1 = ["a", "c", "d", "b", "b", "c", "a", "d", "c", "b", "a", "d"]

function groupSort<T>(list: T[]): T[] {
    let hashTable: Map<T, number> = new Map()
    let groupSortedArray: T[] = []

    for (let item of list) {
        hashTable.set(item, (hashTable.get(item) ?? 0) + 1)
    }

    for (let [key, value] of hashTable.entries()) {

        groupSortedArray.push(...new Array(value).fill(key))
    }

    return groupSortedArray
}

console.log(groupSort(arr1))