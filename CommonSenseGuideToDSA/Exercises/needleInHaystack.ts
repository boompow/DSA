export { }

let needle = "fgh"
let haystack = "abcdefghijklmnopq"

function needleInHaystack(needle: string, haystack: string) {
    let needleLength = needle.length
    //empty needle is found in every haystack
    if (needleLength === 0) return true

    for (let i = 0; i <= haystack.length - needleLength; i++) {
        if (needle === haystack.substring(i, i + needleLength)) {
            return true
        }
    }

    return false
}


console.log(needleInHaystack(needle, haystack))