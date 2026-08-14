export { }

// recursive solution
function fibonacciSequence(n: number): number {
    if (n === 1 || n === 0) return n;

    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}

console.log(fibonacciSequence(7))