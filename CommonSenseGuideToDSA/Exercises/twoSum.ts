export { };

let sum = 10;
const arr: number[] = [3, 1, 4, 5, 2, 8, 12, 9, 6, 17, 15]


function twoSum(list: number[], total: number) {
    let sumArray = []
    let checks = 0
    let pushes = 0
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            checks++
            if (list[i] !== list[j] && list[i] + list[j] === total) {
                sumArray.push([list[i], list[j]])
                pushes++
            }
        }
    }

    console.log(`${checks} Checks, ${pushes} Pushes, and a total of ${checks + pushes} steps`)
    return sumArray
}

console.log(twoSum(arr, sum))