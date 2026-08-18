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

function quickSort(list: number[], left_pointer: number = 0, right_pointer: number = list.length - 1) {
    if (right_pointer - left_pointer <= 0) return;

    let pivot_index = partition(list, left_pointer, right_pointer)

    quickSort(list, left_pointer, pivot_index - 1)
    quickSort(list, pivot_index + 1, right_pointer)

    return list
}


console.log(quickSort([1, 5, 7, 6, 9, 32, 51, 2, 3]))