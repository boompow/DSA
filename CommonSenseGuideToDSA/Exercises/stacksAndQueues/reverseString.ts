export { }

let word = "abcdefgh"


class Stack<T = string> {
    private items: T[] = []

    push(item: T): void {
        this.items.push(item)
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    read(): T | undefined {
        let lastIndex = this.items.length - 1
        return this.items[lastIndex]
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }
}

// using stacks is actually more memory hogging
function reverseString(str: string) {
    let reversedString = []
    let stack = new Stack()
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    while (!stack.isEmpty()) {
        let last = stack.pop()
        reversedString.push(last)
    }

    return reversedString.join('')
}

function reverseStringSimplified(str: string) {
    let reversedString = []
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString.push(str[i])
    }

    return reversedString.join('')
}

console.log(reverseString(word))
console.log(reverseStringSimplified(word))