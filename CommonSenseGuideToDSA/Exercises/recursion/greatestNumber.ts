// Write three different implementations of a function that finds the greatest
// number within an array. Write one function that is O(N2), one that is O(N
// log N), and one that is O(N).

// using loop

function greatestNumberUsingLoop(list: number[]) {
    let greatestNumber = list[0]
    for (let i = 0; i < list.length; i++) {
        if (greatestNumber < list[i]) {
            greatestNumber = list[i]
        }
    }

    return greatestNumber
}

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

function greatestNumberUsingQuickSort(list: number[], low: number = 0, high: number = list.length - 1) {
    if (high - low <= 0) return;

    let pivot_index = partition(list, low, high)

    greatestNumberUsingQuickSort(list, low, pivot_index - 1)
    greatestNumberUsingQuickSort(list, pivot_index + 1, high)

    return list[list.length - 1]
}

function greatestNumberUsingQuickSelect(list: number[], requiredIndex: number = list.length - 1, low: number = 0, high: number = list.length - 1) {
    if (high - low <= 0) return;

    let pivot_index = partition(list, low, high)

    if (requiredIndex < pivot_index) {
        greatestNumberUsingQuickSort(list, low, pivot_index - 1)
    } else if (requiredIndex > pivot_index) {
        greatestNumberUsingQuickSort(list, pivot_index + 1, high)
    } else {
        return list[pivot_index]
    }


    return list[requiredIndex]
}



console.log(greatestNumberUsingLoop([1, 4, 891, 34, 6, 256, 78, 90]))
console.log(greatestNumberUsingQuickSort([1, 4, 891, 34, 6, 256, 78, 90]))
console.log(greatestNumberUsingQuickSelect([1, 4, 891, 34, 6, 256, 78, 90]))