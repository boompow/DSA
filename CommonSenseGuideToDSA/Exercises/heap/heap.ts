export { }


class Heap<T> {
    list: T[] = []

    first() {
        return this.list[0]
    }

    last() {
        return this.list[this.list.length - 1]
    }

    leftChildIndex(index: number): number {
        return 2 * index + 1
    }

    rightChildIndex(index: number): number {
        return 2 * index + 2
    }

    parentIndex(index: number): number {
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


    hasGreaterChild(index: number): boolean {
        return this.list[this.leftChildIndex(index)] && this.list[index] < this.list[this.leftChildIndex(index)]
            ||
            this.list[this.rightChildIndex(index)] && this.list[index] < this.list[this.rightChildIndex(index)]
    }

    findLargerIndex(index: number): number {
        if (!this.list[this.rightChildIndex(index)]) {
            return this.leftChildIndex(index)
        }

        if (this.list[this.rightChildIndex(index)] > this.list[this.leftChildIndex(index)]) {
            return this.rightChildIndex(index)
        } else {
            return this.leftChildIndex(index)
        }
    }

    delete(): boolean {
        if (this.list.length === 0) return false;

        const popped = this.list.pop();
        if (this.list.length > 0 && popped !== undefined) {
            this.list[0] = popped;
        }

        let trickle_down_index: number = 0

        while (this.hasGreaterChild(trickle_down_index)) {
            let largerChildIndex: number = this.findLargerIndex(trickle_down_index);

            [this.list[largerChildIndex], this.list[trickle_down_index]] =
                [this.list[trickle_down_index], this.list[largerChildIndex]]

            trickle_down_index = largerChildIndex;
        }

        return true

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

console.log(heap.delete())