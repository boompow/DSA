export { }

function findX(str: string, index = 0): number {
    if (str.length === 0) {
        return -1
    }

    if (str[0].toLowerCase() === "x") {
        return index
    }

    return findX(str.slice(1), index + 1)
}

console.log(findX("uyix"))