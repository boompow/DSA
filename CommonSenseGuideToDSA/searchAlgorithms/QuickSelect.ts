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


console.log(quickSelect([1, 5, 7, 6, 9, 32, 51, 2, 3], 4))