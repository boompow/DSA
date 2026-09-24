export { }

const arr1 = [5, -10, -6, 9, 4]

function findGreatestProduct(list: number[]) {
    let greatestProduct = null
    let previousItem = list[0]
    let greatestProductItems: [number | null, number | null] = [null, null]

    for (let i = 1; i < list.length; i++) {
        let currentProduct = previousItem * list[i]
        if (greatestProduct === null || currentProduct > greatestProduct) {
            greatestProduct = currentProduct
            greatestProductItems = [previousItem, list[i]]
        }

        previousItem = list[i]
    }

    return {
        numbers: greatestProductItems,
        greatestProduct
    }
}

console.log(findGreatestProduct(arr1))