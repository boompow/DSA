export { }

const arr1 = [1, 3, -5, 45, -101, 20, 34, 56, 67, 2]

function findLargestSubsectionSum(list: number[]): number {
    let currentSum = 0
    let greatestSum = 0

    for (let num of list) {
        if (currentSum + num < 0) {
            currentSum = 0
        } else {
            currentSum += num

            if (currentSum > greatestSum) {
                greatestSum = currentSum
            }
        }
    }

    return greatestSum
}

console.log(findLargestSubsectionSum(arr1))