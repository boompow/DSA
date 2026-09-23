export { }

const text1 = "rattles"
const text2 = "startle"

function anagramCheck(first: string, second: string) {
    const hashTable: Map<string, number> = new Map()

    for (let char of first) {
        hashTable.set(char, (hashTable.get(char) ?? 0) + 1)
    }

    for (let char of second) {
        let count = hashTable.get(char)
        if (!count) {
            return false // character mismatch
        }
        else if (count === 1) {
            hashTable.delete(char)
        } else {
            hashTable.set(char, count - 1)
        }
    }


    return hashTable.size === 0

}

console.log(anagramCheck(text1, text2))