export { }

function printEvenNumbers(low: number, high: number): void {
    if (low % 2 !== 0) {
        low++
    }

    if (low > high) {
        return
    } else {
        console.log(low)
        return printEvenNumbers(low + 2, high)
    }
}

console.log(printEvenNumbers(1, 10))