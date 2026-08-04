export { }

let arr: string[] = ["a", "b", "c", "d", "c", "e", "f"]

function findFirstDuplicate(list: string[]) {
    let nonDuplicateSet: Set<string> = new Set()

    for (let item of list) {
        if (nonDuplicateSet.has(item)) {
            return `has duplicate: ${item}`
        }
        nonDuplicateSet.add(item)
    }

    return "no duplicate"
}

console.log(findFirstDuplicate(arr))