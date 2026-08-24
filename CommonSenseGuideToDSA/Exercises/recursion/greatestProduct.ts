export { }

// Given an array of positive numbers, write a function that returns the
// greatest product of any three numbers. The approach of using three
// nested loops would clock in at O(N3), which is very slow. Use sorting to
// implement the function in a way that it computes at O(N log N) speed.

function partition(list: number[], left_pointer: number, right_pointer: number): number {
    let pivot_pointer = right_pointer
    let pivot = list[pivot_pointer]
    right_pointer -= 1

    while (true) {
        while (list[left_pointer] < pivot) {
            left_pointer++
        }

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

function greatestProduct(list: number[], left_pointer: number = 0, right_pointer: number = list.length - 1) {
    if (right_pointer - left_pointer <= 0) return;

    let pivot_index = partition(list, left_pointer, right_pointer)

    greatestProduct(list, left_pointer, pivot_index - 1)
    greatestProduct(list, pivot_index + 1, right_pointer)

    return list[list.length - 1] * list[list.length - 2] * list[list.length - 3]
}

console.log(greatestProduct([7, 2, 1, 6, 8, 5]))