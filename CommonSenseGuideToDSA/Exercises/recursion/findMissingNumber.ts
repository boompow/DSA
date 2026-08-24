export { }

// The following function finds the “missing number” from an array of integers.
// That is, the array is expected to have all integers from 0 up to the
// array’s length, but one is missing. As examples, the array, [5, 2, 4, 1, 0] is
// missing the number 3, and the array, [9, 3, 2, 5, 6, 7, 1, 0, 4] is missing the
// number 8.


function partition(list: number[], low: number, high: number,): number {
    let pivot_index = high
    let pivot = list[pivot_index]
    high--

    while (true) {
        while (list[low] < pivot) {
            low++
        }

        while (list[high] > pivot && high > low) {
            high--
        }

        if (low >= high) {
            break
        } else {
            [list[low], list[high]] = [list[high], list[low]]
            low++
        }
    }

    [list[low], list[pivot_index]] = [list[pivot_index], list[low]]

    return low
}


function findMissingNumber(list: number[], low: number = 0, high: number = list.length - 1) {
    if (high - low <= 0) return;

    let pivot_index = partition(list, low, high)

    findMissingNumber(list, low, pivot_index - 1)
    findMissingNumber(list, pivot_index + 1, high)

    for (let j = 0; j < list.length; j++) {
        if (list[j + 1] - list[j] > 1) {
            return j + 1
        }
    }

    return null;
}

console.log(findMissingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]))