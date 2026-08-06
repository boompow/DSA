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


function isOpeningBrace(brace: string): boolean {
    let openingBraces = ['{', '(', '[', '<']

    return openingBraces.includes(brace)
}
function isClosingBrace(brace: string): boolean {
    let closingBraces = ['}', ')', ']', '>']

    return closingBraces.includes(brace)
}

function doesNotMatch(openingBrace: string, closingBrace: string) {
    return closingBrace !== {
        "(": ")",
        "[": "]",
        "<": ">",
        "{": "}",
    }[openingBrace]
}

function linter(code: string) {
    let stack = new Stack()

    for (let item of code) {
        if (isOpeningBrace(item)) {
            stack.push(item)
        }

        else if (isClosingBrace(item)) {
            let poppedBrace = stack.pop()

            if (!poppedBrace) {
                return `missing opening brace for ${item}`
            }

            if (doesNotMatch(poppedBrace, item)) {
                return `braces don't match: ${item} and ${poppedBrace}`

            }
        }
    }

    if (!stack.isEmpty()) {
        return `missing closing brace for ${stack.read()}`
    }

    return "no linting issues found"
}


console.log(linter("(var x = [12>"))