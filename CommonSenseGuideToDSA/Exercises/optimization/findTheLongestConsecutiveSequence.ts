export { }

const arr1 = [10, 5, 12, 3, 55, 30, 4, 11, 2]
const arr2 = [19, 13, 15, 12, 18, 14, 17, 11]

function findTheLongestConsecutiveSequence(list: number[]) {
    // first create a hash table of the list
    const hashTable: Map<number, boolean> = new Map()

    for (let item of list) {
        hashTable.set(item, true)
    }

    // find the consecutive sequence
    let sequenceCount = 0
    let sequenceStart = 0

    for (let item of list) {
        if (!hashTable.has(item - 1)) {
            let currentItem = item
            let currentSequenceStart = item
            let currentSequenceCount = 0

            while (hashTable.has(currentItem)) {
                currentSequenceCount++
                currentItem++

            }

            if (currentSequenceCount > sequenceCount) {
                sequenceCount = currentSequenceCount
                sequenceStart = currentSequenceStart
            }
        }
    }


    return Array.from({ length: sequenceCount }, (_, i) => sequenceStart + i)
}


console.log(findTheLongestConsecutiveSequence(arr2))