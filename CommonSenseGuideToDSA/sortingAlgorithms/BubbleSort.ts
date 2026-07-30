export { }

const arr: number[] = [3, 1, 4, 5, 2, 8, 12, 9, 6, 17, 15]

function bubbleSort(list: number[]) {
    let unsortedUntilIndex = list.length - 1
    let comparisons = 0
    let swaps = 0

    while (unsortedUntilIndex > 0) {
        for (let i = 0; i < unsortedUntilIndex; i++) {
            if (list[i] > list[i + 1]) {
                // use JS array destructuring to swap values
                [list[i], list[i + 1]] = [list[i + 1], list[i]]
                swaps++
            }
            comparisons++
        }
        unsortedUntilIndex--

    }

    console.log(`${comparisons} Comparisons, ${swaps} Swaps, and a total of ${swaps + comparisons} steps`)
    return list
}

console.log(bubbleSort(arr))
