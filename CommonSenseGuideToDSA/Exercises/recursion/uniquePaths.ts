export { }

// this was difficult to solve for me at this time, but this is how the book solved it
function uniquePath(row: number, column: number): number {
    if (row === 1 || column === 1) return 1;

    return (uniquePath(row - 1, column) + uniquePath(row, column - 1))
}

console.log(uniquePath(3, 3))


// memoized unique path
function uniquePathMemoized(row: number, column: number): number {
    const memo: Map<string, number> = new Map()

    function helper(row: number, column: number): number {
        if (row === 1 || column === 1) return 1;

        // create a hash key of string type
        let key = `${row}, ${column}`
        if (memo.has(key)) return memo.get(key)!

        let result = (helper(row - 1, column) + helper(row, column - 1))
        memo.set(key, result)

        return result

    }

    return helper(row, column)
}

console.log(uniquePathMemoized(3, 3))