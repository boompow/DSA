export { }


class Heap<T> {
    list: T[] = []

    first() {
        return this.list[0]
    }

    last() {
        return this.list[this.list.length]
    }

    leftChildIndex(index: number) {
        return 2 * index + 1
    }

    rightChildIndex(index: number) {
        return 2 * index + 2
    }

    parentIndex(index: number) {
        return Math.floor((index - 1) / 2)
    }

    insert(data: T) {
        this.list.push(data)
        let newNodeIndex: number = this.list.length - 1
        while (newNodeIndex > 0 && this.list[newNodeIndex] > this.list[this.parentIndex(newNodeIndex)]) {
            [this.list[newNodeIndex], this.list[this.parentIndex(newNodeIndex)]] = [this.list[this.parentIndex(newNodeIndex)], this.list[newNodeIndex]]

            newNodeIndex = this.parentIndex(newNodeIndex)

        }
    }

    delete() {
        this.list[0] = this.list.pop()

    }

    get() {
        return this.list
    }

}

let heap = new Heap()

heap.insert(2)
heap.insert(45)
heap.insert(25)
heap.insert(29)
heap.insert(52)
heap.insert(82)

console.log(heap.get())