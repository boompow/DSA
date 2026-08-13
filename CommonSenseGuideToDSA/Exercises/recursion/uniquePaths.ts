export { }

// this was difficult to solve for me at this time, but this is how the book solved it
function uniquePath(row: number, column: number): number {
    if (row === 1 || column === 1) return 1;

    return (uniquePath(row - 1, column) + uniquePath(row, column - 1))
}

console.log(uniquePath(3, 3))