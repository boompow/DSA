export { }


// using loop
// function characterCount(arr: string[]): number {
//     let totalCount = 0

//     for (let item of arr) {
//         totalCount += item.length
//     }

//     return totalCount
// }

function characterCount(arr: string[]): number {
    let totalCount = 0

    if (arr.length === 0) {
        return totalCount
    }

    totalCount += arr[0].length + characterCount(arr.slice(1))
    return totalCount
}



console.log(characterCount(["ab", "c", "def", "ghjh", "fgh"]))