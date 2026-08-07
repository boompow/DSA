export { }

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return factorial(n - 1) * n;
    }
}

function factorialWithSafeguard(n: number): string | number {
    try {
        if (n < 0 || !Number.isInteger(n)) {
            throw new Error(`${n} is not a valid number for factorial calculation`)
        }

        return factorial(n)

    } catch (error: unknown) {
        if (error instanceof Error) {
            return `[Factorial Error]: ${error.message}`
        }

        return `Unexpected Error`

    }
}

console.log(factorialWithSafeguard(8))