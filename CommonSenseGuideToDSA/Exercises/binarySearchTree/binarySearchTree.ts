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

    // delete button
    // this has been the most challenging concept to implement thus far, and this is directly from the book
    delete(data: T, node: BinaryNode<T> | null): BinaryNode<T> | null {
        if (!node) return null

        else if (data > node.data) {
            node.right = this.delete(data, node.right)
            return node
        } else if (data < node.data) {
            node.left = this.delete(data, node.left)
            return node
        } else if (data === node.data) {
            //  case 1: if there is one or no node
            if (!node.left) return node.right
            else if (!node.right) return node.left

            // case of 2 children nodes for the node that needs to be deleted
            node.right = this.lift(node.right, node)
            return node

        }

        return null
    }

    lift(node: BinaryNode<T>, nodeToDelete: BinaryNode<T>) {
        if (node.left) {
            node.left = this.lift(node.left, nodeToDelete)
            return node
        } else {
            nodeToDelete.data = node.data
            return node.right
        }
    }

    // BST traversal
    traverse(): T[] {
        let list: T[] = []

        function recursion(node: BinaryNode<T> | null): void {
            if (!node) return;

            recursion(node.left)
            list.push(node.data)
            recursion(node.right)
        }

        recursion(this.root)

        return list

    }
}


let BST = new BinarySearchTree()

BST.insert(10)
BST.insert(1)
BST.insert(12)
BST.insert(3)
BST.insert(7)
BST.insert(19)
BST.insert(91)

let BST_traversal = BST.traverse()

console.log(BST_traversal)
