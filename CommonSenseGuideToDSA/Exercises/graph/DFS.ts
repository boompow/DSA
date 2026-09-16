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



function DFSTraverse<T>(vertex: Vertex<T>, visitedVertex: Set<T> = new Set()) {
    visitedVertex.add(vertex.value)

    console.log(vertex.value)

    for (let adjacentVertex of vertex.adjacentVertices) {
        if (visitedVertex.has(adjacentVertex.value)) return

        DFSTraverse(adjacentVertex, visitedVertex)
    }
}

function DFS<T>(vertex: Vertex<T>, searchedValue: T, visitedVertex: Set<T> = new Set()): Vertex<T> | null {
    if (visitedVertex.has(vertex.value)) return null
    visitedVertex.add(vertex.value)

    if (vertex.value === searchedValue) return vertex

    for (let adjacentVertex of vertex.adjacentVertices) {
        let searchedVertex = DFS(adjacentVertex, searchedValue, visitedVertex)
        if (searchedVertex) return searchedVertex
    }

    return null
}


const alice = new Vertex("alice")
const bob = new Vertex("bob")
const cynthia = new Vertex("cynthia")
alice.addAdjacentVertex(bob)
alice.addAdjacentVertex(cynthia)
bob.addAdjacentVertex(cynthia)
cynthia.addAdjacentVertex(bob)

console.log(DFS(alice, "cynthia"))

