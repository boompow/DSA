export { }

let arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
let arr2: number[] = [0, 2, 4, 6, 8]

function findIntersection(array1: number[], array2: number[]) {
    let intersectionArray = []
    let arrayHash: Map<number, boolean> = new Map()
    let hashing = 0
    let checks = 0
    let pushes = 0

    for (let i = 0; i < array1.length; i++) {
        arrayHash.set(array1[i], true)
        hashing++
    }

    for (let j = 0; j < array2.length; j++) {
        checks++
        if (arrayHash.get(array2[j]) === true) {
            intersectionArray.push(array2[j])
            pushes++
        }
    }

    console.log(`${hashing} key value pairs, ${checks} checks, ${pushes} pushes and a total of ${hashing + checks + pushes} steps`)
    return intersectionArray
}

console.log(findIntersection(arr1, arr2))