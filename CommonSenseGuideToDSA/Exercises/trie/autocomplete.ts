export { }

// trie search return type
type searchReturnType = {
    currentNode: TrieNode,
    matchedPrefix: string

}

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
    search(word: string): searchReturnType | null {
        let currentNode = this.root
        let matchedPrefix = ""

        for (let char of word) {
            if (currentNode.children.has(char)) {
                currentNode = currentNode.children.get(char)!
                matchedPrefix += char
            }
            else {
                break
            }
        }

        if (matchedPrefix === "") return null
        return { currentNode, matchedPrefix }
    }

    // 
    private collectAllWords(node: TrieNode, word: string = "", words: string[] = []) {
        for (let [key, childNode] of node.children.entries()) {
            if (key === "*") {
                words.push(word)
            } else {
                this.collectAllWords(childNode!, word + key, words)
            }
        }

        return words
    }

    autocomplete(prefix: string) {
        let result = this.search(prefix)
        if (!result) return null

        let { currentNode, matchedPrefix } = result

        return this.collectAllWords(currentNode, matchedPrefix)
    }
}


let trie = new Trie()

trie.insert("word")
trie.insert("world")
trie.insert("wok")
trie.insert("luck")
trie.insert("tick")

console.log(trie.autocomplete("worse"))