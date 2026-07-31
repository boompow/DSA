export { }

const palindromes: string[] = [
    "radar",
    "level",
    "kayak",
    "bus",
    "rotor",
    "roots",
    "madam",
    "deified",
    "civic",
    "refer",
    "noon",
    "stats"
];

type palindromeType = {
    word: string,
    isPalindrome: boolean
}

function palindromeChecker(list: string[]) {
    let checkedArr: palindromeType[] = []
    let checks = 0
    let pushes = 0
    for (let i = 0; i < list.length; i++) {
        let word = list[i]
        let startPointer = 0
        let endPointer = word.length - 1
        let isPalindrome = true
        while (startPointer < endPointer) {
            checks++
            if (word[startPointer] === word[endPointer]) {
                startPointer++
                endPointer--
            } else {
                isPalindrome = false
                break
            }
        }

        checkedArr.push({
            word: word,
            isPalindrome: isPalindrome
        })
        pushes++

    }
    console.log(`${checks} Checks, ${pushes} Pushes, and a total of ${checks + pushes} steps`)
    return checkedArr
}

console.log(palindromeChecker(palindromes))