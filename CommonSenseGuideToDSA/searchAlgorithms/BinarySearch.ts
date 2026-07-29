export { };

let value = 117;

const arr: number[] = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]

// this works for sorted arrays
//finding the index of an item in an arrray
function binarySearch(item: number, list: number[]) {
    // create pointers
    let startPointer = 0;
    let endPointer = list.length - 1
    let steps = 0

    while (startPointer <= endPointer) {
        let midPoint = startPointer + Math.floor((endPointer - startPointer) / 2)
        //Binary search relies on halving the search space on every single step.

        // When you check midPoint and realize your target is greater than list[midPoint], you already know for an absolute fact that midPoint itself is not the answer (because you just checked it).

        // Therefore, your new search boundary must start after midPoint. You must explicitly step past the midpoint by adding or subtracting 1

        steps++
        if (item === list[midPoint]) {
            console.log(steps)
            return midPoint
        }
        else if (item > list[midPoint]) {
            startPointer = midPoint + 1
        }
        else if (item < list[midPoint]) {
            endPointer = midPoint - 1
        }
    }

    console.log(steps)
    return -1;
}

console.log(binarySearch(value, arr))