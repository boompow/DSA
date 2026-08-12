export { }


function permutation<T>(arr: T[]): T[][] {
    let allPermutations: T[][] = []

    if (arr.length === 1) {
        return [arr]
    }

    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i];

        let remainingItems = [...arr.slice(0, i), ...arr.slice(i + 1,)]

        for (let p of permutation(remainingItems)) {
            allPermutations.push([currentItem, ...p])
        }
    }

    return allPermutations
}

console.log(permutation([1, 2, 3]))
console.log(permutation(["a", "b", "c", "d"]))