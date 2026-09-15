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

    // 
    collectAllWords(node: TrieNode | null = null, word: string = "", words: string[] = []) {
        let currentNode = node || this.root

        for (let [key, childNode] of currentNode.children.entries()) {
            if (key === "*") {
                words.push(word)
            } else {
                this.collectAllWords(childNode, word + key, words)
            }
        }

        return words
    }

    autocomplete(prefix: string) {
        let currentNode = this.search(prefix)

        if (!currentNode) return null

        return this.collectAllWords(currentNode, prefix)
    }
}


let trie = new Trie()

trie.insert("word")
trie.insert("world")
trie.insert("wok")
trie.insert("luck")
trie.insert("tick")

console.log(trie.autocomplete("wo"))