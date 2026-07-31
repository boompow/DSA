export { }

// fahrenheit to celsius formula
// c = (f-32)* (5/9)


const arr: number[] = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]

// temp given in farenhe
function averageCelsiusReader(list: number[], isFahrenheit: boolean = true) {
    let averageCelsius = 0
    let sum = 0

    for (let i = 0; i < list.length; i++) {
        sum += list[i]
    }
    if (isFahrenheit) {
        averageCelsius = ((sum - (32 * list.length)) * (5 / 9)) / list.length
        return averageCelsius
    } else {
        averageCelsius = sum / list.length
        return averageCelsius
    }

}

console.log(averageCelsiusReader(arr, true))