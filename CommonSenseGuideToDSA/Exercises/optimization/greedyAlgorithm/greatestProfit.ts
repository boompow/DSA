export { }


let arr1 = [10, 7, 5, 8, 11, 2, 6, 12]

function findGreatestProfit(priceList: number[]) {
    let buyPrice = priceList[0]
    let greatestProfit = 0
    let buyingPriceForGreatestProfit = 0
    let sellingPriceForGreatestProfit = 0

    for (let price of priceList) {
        let potentialProfit = price - buyPrice

        if (price < buyPrice) {
            buyPrice = price
        } else if (potentialProfit > greatestProfit) {
            greatestProfit = potentialProfit
            sellingPriceForGreatestProfit = price
            buyingPriceForGreatestProfit = buyPrice
        }

    }

    return {
        buyAt: buyingPriceForGreatestProfit,
        sellAt: sellingPriceForGreatestProfit,
        profit: greatestProfit
    }
}

console.log(findGreatestProfit(arr1))