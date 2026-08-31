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

    reverseList(): T[] {
        let list: T[] = []
        let reversedList: T[] = []
        let current = this.head

        while (current) {
            list.push(current.data)
            current = current.next
        }


        // using another loop to reverse it
        for (let i = list.length; i > 0; i--) {
            reversedList.push(list[i - 1])
        }

        return reversedList
    }

    reverseListWithTwoPointers(): T[] {
        let list: T[] = []
        let current = this.head

        while (current) {
            list.push(current.data)
            current = current.next
        }

        let left = 0
        let right = list.length - 1

        while (left < right) {
            [list[left], list[right]] = [list[right], list[left]]
            left++
            right--
        }

        return list
    }

    deleteByPointer(data: ListNode<T>): boolean {
        // I actually didn't get it until I saw the solution in the book for this case. The thing that confused me was that the previous node would be pointing to a deleted node. but the solution was not to delete the accessed node but to change the data and its next pointer

        let accessedNode = data
        if (!accessedNode.next) return false
        accessedNode.data = accessedNode.next.data
        accessedNode.next = accessedNode.next.next

        return true

    }
}

const list = new LinkedList

list.append(4)
list.append(9)
list.append(45)
list.append(12)
list.append(18)
list.append(34)

console.log(list.reverseListWithTwoPointers())