export { }

function sumRecursively(low: number, high: number): number {
    if (low > high) {
        throw new Error(`Invalid range: 'low' (${low}) cannot be greater than 'high' (${high}).`);
    }

    if (high === low) {
        return low
    } else {
        return high + sumRecursively(low, high - 1)
    }

}

console.log(sumRecursively(1, 30))