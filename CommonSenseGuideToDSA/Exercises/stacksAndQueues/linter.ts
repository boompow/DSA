export { }

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

const OPENING_BRACES = ['{', '(', '[', '<']
const CLOSING_BRACES = ['}', ')', ']', '>']
const BRACE_PAIRS: Record<string, string> = {
    "(": ")",
    "[": "]",
    "<": ">",
    "{": "}",
}

function linter(code: string) {
    let stack = new Stack()

    for (let item of code) {
        if (OPENING_BRACES.includes(item)) {
            stack.push(item)
        }

        else if (CLOSING_BRACES.includes(item)) {
            let poppedBrace = stack.pop()

            if (!poppedBrace) {
                return `missing opening brace for ${item}`
            }

            if (BRACE_PAIRS[poppedBrace] !== item) {
                return `braces don't match: ${item} and ${poppedBrace}`

            }
        }
    }

    if (!stack.isEmpty()) {
        return `missing closing brace for ${stack.read()}`
    }

    return "no linting issues found"
}


console.log(linter("(var x = [12>)"))