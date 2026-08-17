export { }

const arr = [23, 81, 11, 20, 64, 1, 3, 4, 5, 8, 9]

function addUntil100(list: number[]): number {
    let updatedList: number[] = []
    function helper(index: number, currentSum: number) {
        if (index >= list.length) {
            console.log(updatedList)
            return currentSum;
        }

        let currentValue = list[index]
        if (currentValue + currentSum > 100) {
            return helper(index + 1, currentSum);
        }
        updatedList.push(currentValue)
        return helper(index + 1, currentSum + currentValue)
    }

    return helper(0, 0)

}

console.log(addUntil100(arr))