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

    insert(data: T): boolean {
        let newNode = new BinaryNode(data)
        if (!this.root) {
            this.root = newNode
            return true
        }

        let currentNode = this.root
        while (currentNode !== null) {
            // I'm going to reject duplicates
            if (data === currentNode.data) return false


            if (data < currentNode.data) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = newNode
                    return true
                }
            } else if (data > currentNode.data) {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = newNode
                    return true
                }
            }
        }

        // although dead code, TS flags the return as undefined if I remove it
        return false


    }

    search(data: T): BinaryNode<T> | null {

        let current = this.root

        while (current !== null) {
            if (current.data === data) {
                return current
            }
            else if (data < current.data) {
                current = current.left
            } else {
                current = current.right
            }
        }

        return null

    }
}


let BST = new BinarySearchTree()

BST.insert(10)
BST.insert(1)
BST.insert(12)
BST.insert(15)

console.log(BST.search(1))