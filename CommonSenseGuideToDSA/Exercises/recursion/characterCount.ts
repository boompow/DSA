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
    if (arr.length === 0) return 0
    return arr[0].length + characterCount(arr.slice(1))
}



console.log(characterCount(["ab", "c", "def", "ghjh", "fgh"]))