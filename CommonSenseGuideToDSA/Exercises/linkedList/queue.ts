export { }

class LinkNode<T> {
    data: T
    previous: LinkNode<T> | null = null
    next: LinkNode<T> | null = null

    constructor(data: T) {
        this.data = data
    }

}

class Queue<T> {
    head: LinkNode<T> | null = null
    tail: LinkNode<T> | null = null

    _size = 0

    get size() {
        return this._size
    }

    enqueue(data: T): void {
        let newNode = new LinkNode(data)
        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.previous = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this._size++
    }

    dequeue(): T | null {
        if (!this.head) return null

        let removedNode = this.head.data

        // just one element
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            if (this.head) {
                this.head.previous = null
            }

        }

        this._size--
        return removedNode

    }

    listAll() {
        let list: T[] = []
        let current = this.head

        while (current) {
            list.push(current.data)
            current = current.next
        }

        return list
    }

    reveresedList() {
        let list: T[] = []
        let current = this.tail

        while (current) {
            list.push(current.data)
            current = current.previous
        }

        return list
    }
}

const queue = new Queue()

queue.enqueue(12)
queue.enqueue(3)
queue.enqueue(1)

console.log(queue.reveresedList())