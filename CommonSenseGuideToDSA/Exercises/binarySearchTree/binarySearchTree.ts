export { }

class BinaryNode<T> {
    data: T
    left: BinaryNode<T> | null = null
    right: BinaryNode<T> | null = null

    constructor(data: T) {
        this.data = data
    }

}

class BinarySearchTree<T> {
    root: BinaryNode<T> | null = null

    insert(data: T) {
        let newNode = new BinaryNode(data)
        if (!this.root) {
            this.root = newNode
        }
    }

    search(data: T): T | null {
        if (!this.root) return null;

        let current = this.root

        while (current) {
            if (current.data === data) {
                return current.data
            }
            else if (current.data < data && current.right) {
                current = current.right
            } else if (current.data > data && current.left) {
                current = current.left
            }
        }

        return null

    }
}