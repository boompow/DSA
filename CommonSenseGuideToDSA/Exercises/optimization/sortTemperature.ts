export { }

// You’re creating software that analyzes the data of body temperature
// readings taken from hundreds of human patients. These readings are
// taken from healthy people and range from 97.0 degrees Fahrenheit to
// 99.0 degrees Fahrenheit. An important point: within this application, the
// decimal point never goes beyond the tenths place.
// Here’s a sample array of temperature readings:
// [98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]
// You are to write a function that sorts these readings from lowest to highest.
// If you used a classic sorting algorithm such as Quicksort, this would take
// O(N log N). However, in this case, it’s actually possible to write a faster
// sorting algorithm.

let arr = [98.6, 98.0, 97.1, 99.0, 98.9, 97.8, 98.5, 98.2, 98.0, 97.1]

function sortTemperature(tempList: number[]) {
    const tempHashTable: Map<number, null | number> = new Map()
    let sortedList = []

    // since the temp range is from 97.0 to 99.0 and there is only one decimal place
    // it can be stored as from 970 to 990, a list of 21 key value pairs from 970 to 990 will be created
    for (let i = 970; i < 991; i++) {
        tempHashTable.set(i, null)
    }

    for (let item of tempList) {
        tempHashTable.set(item * 10, item * 10)
    }

    for (let [key, value] of tempHashTable.entries()) {
        if (value !== null) {
            sortedList.push((value / 10))
        }
    }

    return sortedList
}

console.log(sortTemperature(arr))