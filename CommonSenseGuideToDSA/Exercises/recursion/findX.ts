export { }

function findX(str: string, index = 0): number | string {
    if (str.length === 0) {
        return "not found"
    }

    let currentValue = str[0]
    console.log(currentValue)
    if (currentValue.toLowerCase() === "x") {
        return index
    }

    return findX(str.slice(1), ++index)
}

console.log(findX("uyfgix"))