export { }


function triangularNumbers(num: number): number[] {
    if (num === 0) return []
    let prev = triangularNumbers(num - 1)
    let currentValue = prev.length > 0 ? num + prev[prev.length - 1] : num
    return [...prev, currentValue]
}

console.log(triangularNumbers(5))