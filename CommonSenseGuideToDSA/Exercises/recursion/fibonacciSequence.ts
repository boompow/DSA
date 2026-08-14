export { }

// recursive solution
function fibonacciSequence(n: number): number {
    if (n === 1 || n === 0) return n;

    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
}

console.log(fibonacciSequence(7))


// recursive solution with memoization using closure and hash table
function createFibonacci() {
    const memo: Map<number, number> = new Map()

    return function fibonacciSequence(n: number): number {
        if (n < 0) throw new Error("Input must be a non-negative integer.");
        if (n <= 1) return n;
        if (memo.has(n)) return memo.get(n)!;

        let result = fibonacciSequence(n - 1) + fibonacciSequence(n - 2)
        memo.set(n, result)

        return result
    }
}

let memoizedFibonacciSequence = createFibonacci()


console.log(memoizedFibonacciSequence(30))