export { }

// the implementation of Djikstra's algorithm from the book, easy to understand the concept but had a hard time understanding the implementation

class City<T> {
    name: T
    routes: Map<City<T>, number>
    constructor(name: T) {
        this.name = name
        this.routes = new Map()
    }

    addRoute(vertex: City<T>, price: number) {
        this.routes.set(vertex, price)
    }
}

function dijkstrasShortestPath<T>(startingCity: City<T>, finalDestination: City<T>) {
    const cheapestPricesTable = new Map()
    const cheapestPreviousStopoverCityTable = new Map()

    let unvisitedCities: Set<City<T>> = new Set()
    let visitedCities = new Map()

    cheapestPricesTable.set(startingCity.name, 0)
    let currentCity: City<T> | undefined = startingCity

    while (currentCity) {
        visitedCities.set(currentCity.name, true)
        // remove current city from the unvisited cities list
        if (unvisitedCities.has(currentCity)) unvisitedCities.delete(currentCity)


        for (let [adjacentCity, price] of currentCity.routes.entries()) {
            if (!visitedCities.has(adjacentCity.name)) {
                unvisitedCities.add(adjacentCity)
            }

            let priceThroughCurrentCity = cheapestPricesTable.get(currentCity.name) + price

            if (!cheapestPricesTable.has(adjacentCity.name) || priceThroughCurrentCity < cheapestPricesTable.get(adjacentCity.name)) {
                cheapestPricesTable.set(adjacentCity.name, priceThroughCurrentCity)
                cheapestPreviousStopoverCityTable.set(adjacentCity.name, currentCity.name)
            }

        }

        // find the lowest priced adjacent city of the current city and make that the new current city
        let minCity: City<T> | undefined = undefined
        let minPrice = Infinity

        for (let city of unvisitedCities) {
            const cityPrice = cheapestPricesTable.get(city.name)
            if (cityPrice < minPrice) {
                minPrice = cityPrice
                minCity = city
            }
        }

        currentCity = minCity

        if (!currentCity) break

    }
    // shortest path
    let shortestPath = []

    // To construct the shortest path, we need to work backwards from our final destination. So, we begin with the final destination as our current_city_name
    let currentCityName = finalDestination.name
    if (!cheapestPricesTable.has(finalDestination.name)) {
        return []
    }

    while (currentCityName != startingCity.name) {
        if (currentCityName === undefined) {
            return []
        }
        shortestPath.push(currentCityName)

        currentCityName = cheapestPreviousStopoverCityTable.get(currentCityName)
    }
    shortestPath.push(startingCity.name)

    return shortestPath.reverse()
}

const atlanta = new City("Atlanta")
const boston = new City("Boston")
const chicago = new City("Chicago")
const denver = new City("Denver")
const el_paso = new City("El Paso")
atlanta.addRoute(boston, 100)
atlanta.addRoute(denver, 160)
boston.addRoute(chicago, 120)
boston.addRoute(denver, 180)
chicago.addRoute(el_paso, 80)
denver.addRoute(chicago, 40)
denver.addRoute(el_paso, 140)

console.log(dijkstrasShortestPath(atlanta, el_paso))