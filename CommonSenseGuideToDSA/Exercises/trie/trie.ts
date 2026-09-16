export { }

class TrieNode {
    children: Map<string, TrieNode | null> = new Map()
}

class Trie {
    // create the hash trie node
    root = new TrieNode()

    //  insert node
    insert(word: string) {
        let currentNode = this.root

        for (let char of word) {
            if (currentNode.children.has(char)) {
                currentNode = currentNode.children.get(char)!
            } else {
                let newNode = new TrieNode()
                currentNode.children.set(char, newNode)
                currentNode = newNode
            }

        }

        currentNode.children.set("*", null)
    }

    // search for a word
    search(word: string): TrieNode | null {
        let currentNode = this.root

        for (let char of word) {
            if (currentNode.children.has(char)) {
                currentNode = currentNode.children.get(char)!
            } else {
                return null
            }

        }
        return currentNode
    }

    // Write a function that traverses each node of a trie and prints each key,
    // including all "*" keys.
    getAll(): string[] {
        let list: string[] = []

        function traverse(node: TrieNode) {
            for (let [key, childNode] of node.children.entries()) {
                if (node.children.has("*")) {
                    list.push("*")
                    return
                }
                list.push(key)
                traverse(childNode!)
            }
        }

        if (!this.root) return []

        traverse(this.root)

        return list

    }
}

let trie = new Trie()

trie.insert("word")
trie.insert("world")
trie.insert("wok")
trie.insert("war")
trie.insert("party")

console.log(trie.getAll())