import Queue from "../linkedList/queue.ts"

export { }

class Vertex<T> {
    value: T
    adjacentVertices: Vertex<T>[]

    constructor(value: T) {
        this.value = value
        this.adjacentVertices = []
    }

    addAdjacentVertex(vertex: Vertex<T>) {
        this.adjacentVertices.push(vertex)
    }
}

function BFSTraversal<T>(startingVertex: Vertex<T>, visitedVertex: Set<T> = new Set()) {
    let queue = new Queue<Vertex<T>>()

    visitedVertex.add(startingVertex.value)
    queue.enqueue(startingVertex)

    while (queue.size) {
        let currentVertex = queue.dequeue()!
        console.log(currentVertex.value)

        for (let adjacentVertex of currentVertex.adjacentVertices) {
            if (!visitedVertex.has(adjacentVertex.value)) {
                visitedVertex.add(adjacentVertex.value)
                queue.enqueue(adjacentVertex)
            }
        }
    }
}

function BFS<T>(startingVertex: Vertex<T>, searchedValue: T, visitedVertex: Set<T> = new Set()) {
    let queue = new Queue<Vertex<T>>()

    visitedVertex.add(startingVertex.value)

    queue.enqueue(startingVertex)

    while (queue.size) {
        let currentVertex = queue.dequeue()!

        if (currentVertex.value === searchedValue) return currentVertex

        for (let adjacentVertex of currentVertex.adjacentVertices) {
            if (!visitedVertex.has(adjacentVertex.value)) {
                visitedVertex.add(adjacentVertex.value)
                queue.enqueue(adjacentVertex)
            }
        }
    }
}

const alice = new Vertex("alice")
const bob = new Vertex("bob")
const cynthia = new Vertex("cynthia")
alice.addAdjacentVertex(bob)
alice.addAdjacentVertex(cynthia)
bob.addAdjacentVertex(cynthia)
cynthia.addAdjacentVertex(bob)

console.log(BFSTraversal(alice))