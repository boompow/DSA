export { }

const arr: number[] = [3, 1, 4, 5, 2, 8, 12, 9, 6, 17, 15]


function insertionSort(list: number[]) {
    let comparisons = 0
    let swaps = 0

    for (let i = 1; i < list.length; i++) {
        let currentIndex = i

        while (currentIndex > 0) {
            comparisons++
            if (list[currentIndex] < list[currentIndex - 1]) {
                [list[currentIndex], list[currentIndex - 1]] = [list[currentIndex - 1], list[currentIndex]]
                currentIndex--
                swaps++
            } else {
                break
            }
        }
    }

    console.log(`${comparisons} Comparisons, ${swaps} Swaps, and a total of ${swaps + comparisons} steps`)
    return list

}

console.log(insertionSort(arr))
