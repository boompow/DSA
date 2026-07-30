export { }

const arr: number[] = [3, 1, 4, 5, 2, 8, 12, 9, 6, 17, 15]

function bubbleSort(list: number[]) {
    let unsortedUntilIndex = list.length - 1
    let steps = 0

    while (unsortedUntilIndex > 0) {
        for (let i = 0; i < unsortedUntilIndex; i++) {
            if (list[i] > list[i + 1]) {
                // use JS array destructuring to swap values
                [list[i], list[i + 1]] = [list[i + 1], list[i]]
            }
            steps++
        }
        unsortedUntilIndex--

    }

    console.log(steps)
    return list
}

console.log(bubbleSort(arr))
