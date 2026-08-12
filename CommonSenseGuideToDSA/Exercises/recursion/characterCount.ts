export { }


// using loop
// function characterCount(arr: string[]): number {
//     let totalCount = 0

//     for (let item of arr) {
//         totalCount += item.length
//     }

//     return totalCount
// }

function characterCount(arr: string[], index = 1): number {
    let totalCount = 0

    if (arr.length === 1) {
        return totalCount += arr[0].length
    }

    totalCount += arr[0].length + characterCount(arr.slice(index,), index++)

    return totalCount
}



console.log(characterCount(["ab", "c", "def", "ghjh", "fgh"]))