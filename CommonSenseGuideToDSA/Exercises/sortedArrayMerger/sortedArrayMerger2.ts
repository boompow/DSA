export { }

const arr1: number[] = [1, 4, 10, 20, 35]
const arr2: number[] = [1, 3, 6, 10, 15, 21, 28]

function sortedArrayMerger(array1: number[], array2: number[]) {
    let mergedArray = []
    let pointer1 = 0
    let pointer2 = 0

    // while both pointers point to index that exists
    while (pointer1 < array1.length && pointer2 < array2.length) {

        // comparison
        if (array1[pointer1] <= array2[pointer2]) {
            mergedArray.push(array1[pointer1])
            pointer1++
        }
        else if (array2[pointer2] < array1[pointer1]) {
            mergedArray.push(array2[pointer2])
            pointer2++
        }
    }

    while (pointer1 < array1.length) {
        mergedArray.push(array1[pointer1])
        pointer1++
    }

    while (pointer2 < array2.length) {
        mergedArray.push(array2[pointer2])
        pointer2++
    }

    return mergedArray
}

console.log(sortedArrayMerger(arr1, arr2))