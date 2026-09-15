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
}

let trie = new Trie()

trie.insert("word")
trie.insert("world")

console.log(trie.search("words"))