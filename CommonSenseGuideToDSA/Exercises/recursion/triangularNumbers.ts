export { }


function triangularNumbers(num: number): number {
    if (num === 0) return 0
    let value = num + triangularNumbers(num - 1)
    return value
}

console.log(triangularNumbers(5))