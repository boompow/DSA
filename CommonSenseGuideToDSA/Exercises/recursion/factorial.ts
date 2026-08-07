export { }

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(6))