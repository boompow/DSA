export { }

function golomb(n: number) {
    const memo: Map<number, number> = new Map

    function helper(n: number): number {
        if (n <= 0) throw new Error("Input must be a non-negative integer.");
        if (n === 1) return 1;
        if (memo.has(n)) return memo.get(n)!


        let result = 1 + helper(n - helper(helper(n - 1)))
        memo.set(n, result)

        return result
    }

    return helper(n)
}

console.log(golomb(3))