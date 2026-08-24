export { }

function partition(list: number[], left_pointer: number, right_pointer: number): number {
    let pivot_pointer = right_pointer
    let pivot = list[pivot_pointer]

    right_pointer -= 1

    while (true) {
        while (list[left_pointer] < pivot) {
            left_pointer++
        }

        // the right pointer must not be allowed to move past the left pointer
        while (list[right_pointer] > pivot && right_pointer > left_pointer) {
            right_pointer--
        }

        if (left_pointer >= right_pointer) {
            break
        } else {
            [list[left_pointer], list[right_pointer]] = [list[right_pointer], list[left_pointer]]
            left_pointer++
        }
    }

    [list[left_pointer], list[pivot_pointer]] = [list[pivot_pointer], list[left_pointer]]
    return left_pointer
}

// swap partition with lomutoPartition in the quickSelect
function lomutoPartition(list: number[], low: number, high: number): number {
    const pivot = list[high]
    let pointer = low - 1

    for (let j = low; j < high; j++) {
        if (list[j] <= pivot) {
            pointer++
            [list[pointer], list[j]] = [list[j], list[pointer]]
        }
    }

    [list[pointer + 1], list[high]] = [list[high], list[pointer + 1]]

    return pointer + 1
}

function quickSelect(list: number[], requiredIndex: number, left_pointer: number = 0, right_pointer: number = list.length - 1) {
    if (right_pointer - left_pointer <= 0) return;

    let pivot_index = partition(list, left_pointer, right_pointer)


    if (requiredIndex < pivot_index) {
        quickSelect(list, requiredIndex, left_pointer, pivot_index - 1)
    }
    else if (requiredIndex > pivot_index) {
        quickSelect(list, requiredIndex, pivot_index + 1, right_pointer)
    }
    else {
        return list[pivot_index]
    }

    return list[requiredIndex]
}


console.log(quickSelect([1, 5, 7, 6, 9, 32, 51, 2, 3], 7))

// console.log(lomutoPartition([7, 2, 1, 6, 8, 5], 0, 5))