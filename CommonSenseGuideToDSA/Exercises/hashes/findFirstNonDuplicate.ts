export { }

let arr: string = "minimum"

function findFirstNonDuplicate(list: string) {
    // finding the first non-duplicate requires a two-pass approach: first tallying frequencies into a lookup map, then iterating through the original sequence to find the first element with a count of 1.
    let frequencyMap: Map<string, number> = new Map()

    for (let item of list) {
        frequencyMap.set(item, ((frequencyMap.get(item) || 0) + 1))
    }

    for (let item of list) {
        if (frequencyMap.get(item) === 1) {
            return `first non duplicate found ${item}`
        }
    }

    return 'no non-duplicates found'
}

console.log(findFirstNonDuplicate(arr))