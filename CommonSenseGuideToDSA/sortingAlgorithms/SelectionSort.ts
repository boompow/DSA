export { }

const arr: number[] = [3, 1, 4, 5, 2, 8, 12, 9, 6, 17, 15]

function selectionSort(list: number[]) {
    let startIndex = 0
    let steps = 0

    while (startIndex < list.length - 1) {
        // let's assume the lowest value index is the start index and update it after looping through the list
        let lowestValueIndex = startIndex
        for (let i = startIndex + 1; i < list.length; i++) {
            if (list[i] < list[lowestValueIndex]) {
                lowestValueIndex = i
            }
            steps++
        }

        [list[startIndex], list[lowestValueIndex]] = [list[lowestValueIndex], list[startIndex]]
        startIndex++
    }

    console.log(steps)
    return list
}


console.log(selectionSort(arr))