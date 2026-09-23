export { }

const authors = [
    { author_id: 1, name: "Virginia Woolf" },
    { author_id: 2, name: "Leo Tolstoy" },
    { author_id: 3, name: "Dr. Seuss" },
    { author_id: 4, name: "J. K. Rowling" },
    { author_id: 5, name: "Mark Twain" }
]

const books = [
    { author_id: 3, title: "Hop on Pop" },
    { author_id: 1, title: "Mrs. Dalloway" },
    { author_id: 4, title: "Harry Potter and the Sorcerer's Stone" },
    { author_id: 1, title: "To the Lighthouse" },
    { author_id: 2, title: "Anna Karenina" },
    { author_id: 5, title: "The Adventures of Tom Sawyer" },
    { author_id: 3, title: "The Cat in the Hat" },
    { author_id: 2, title: "War and Peace" },
    { author_id: 3, title: "Green Eggs and Ham" },
    { author_id: 5, title: "The Adventures of Huckleberry Finn" }
]

const authorsMap: Map<number, string> = new Map()
authors.map(author => authorsMap.set(author.author_id, author.name))

const booksMap: Map<number, string> = new Map()
books.map(book => booksMap.set(book.author_id, book.title))

function getBooksWithAuthors() {
    let booksWithAuthors: Map<string, string> = new Map()

    for (let [author_id, name] of authorsMap.entries()) {
        let title = booksMap.get(author_id)!
        booksWithAuthors.set(name, title)
    }

    return booksWithAuthors
}

// console.log(getBooksWithAuthors())


// second exercise: find the player that plays both basketball and football at O(m+n) time
type GameType = {
    first_name: string,
    last_name: string,
    team: string
}

const basketballPlayers = [
    { first_name: "Jill", last_name: "Huang", team: "Gators" },
    { first_name: "Janko", last_name: "Barton", team: "Sharks" },
    { first_name: "Wanda", last_name: "Vakulskas", team: "Sharks" },
    { first_name: "Jill", last_name: "Moloney", team: "Gators" },
    { first_name: "Luuk", last_name: "Watkins", team: "Gators" }
]

const footballPlayers = [
    { first_name: "Hanzla", last_name: "Radosti", team: "32ers" },
    { first_name: "Tina", last_name: "Watkins", team: "Barleycorns" },
    { first_name: "Alex", last_name: "Patel", team: "32ers" },
    { first_name: "Jill", last_name: "Huang", team: "Barleycorns" },
    { first_name: "Wanda", last_name: "Vakulskas", team: "Barleycorns" }
]


function findMultiGamePlayer(game1Players: GameType[], game2Players: GameType[]) {
    const game1PlayersHashTable: Map<string, boolean> = new Map()
    let multiplayerList = []


    game1Players.map((player) => game1PlayersHashTable.set(`${player.first_name} ${player.last_name}`, true))


    for (let player of game2Players) {
        let isMultiplayer = game1PlayersHashTable.get(`${player.first_name} ${player.last_name}`)
        if (isMultiplayer) {
            multiplayerList.push(`${player.first_name} ${player.last_name}`)
        }
    }

    return multiplayerList
}

console.log(findMultiGamePlayer(basketballPlayers, footballPlayers))