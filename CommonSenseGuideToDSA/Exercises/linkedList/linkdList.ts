export { }

// classic single linked list
class ListNode<T> {
    data: T;
    next: ListNode<T> | null = null;
    constructor(data: T) {
        this.data = data
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null
    tail: ListNode<T> | null = null
    _size = 0

    get size() {
        return this._size
    }


    // append
    append(data: T) {
        // there are 2 scenarios
        // scenario 1: there is no data added before

        let newNode = new ListNode(data)
        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            // scenario 2: there is already a node and the tail needs to point to the new node, and the new node needs to be the new tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this._size++
    }

    prepend(data: T) {
        let newNode = new ListNode(data)
        // scenario 1: no nodes
        if (!this.head || !this.tail) {
            this.head = newNode
            this.tail = newNode
        } else {
            // scenario 2: there are nodes
            newNode.next = this.head
            this.head = newNode
        }

        this._size++
    }

    find(data: T): ListNode<T> | null {
        let current = this.head

        while (current) {
            if (current.data === data) return current;
            current = current.next;
        }

        return null

    }

    delete(data: T): boolean {
        if (!this.head) return false

        if (this.head.data === data) {
            this.head = this.head.next
            this._size--
            if (this._size === 0) {
                this.tail = null;
            }
            return true
        }

        let current = this.head

        while (current.next) {
            if (current.next.data === data) {
                if (current.next === this.tail) {
                    this.tail = current
                }
                current.next = current.next.next
                this._size--
                return true
            }

            current = current.next
        }

        return false
    }

    listAll(): T[] {
        let list: T[] = []
        let current = this.head

        while (current) {
            list.push(current.data)
            current = current.next
        }

        return list
    }

    last(): T | null {
        if (!this.tail) return null
        return this.tail.data
    }
}

const list = new LinkedList

list.append(4)
list.append(9)
list.append(45)
list.append(12)
list.append(18)
list.append(34)

console.log(list.last())