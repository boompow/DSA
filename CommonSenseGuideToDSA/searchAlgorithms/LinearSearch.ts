export { };

let value = "apple";

const arr: string[] = ["banana", "mango", "orange", "papaya", "apple", "kiwi", "pinapple"]

function linearSearch(item: string, list: string[]) {
    let steps = 0;
    for (let i = 0; i < list.length; i++) {
        steps++
        if (list[i] === item) {
            console.log(steps)
            return i // by placing a return here we prevent the loop from going on after it has found the value and thus taking n steps where n is the number of items in the list
            //so in worst case scenarios it takes n steps and best case scenarios it takes 1 step
        }
    }
    console.log(steps)
    return "not found"

}

linearSearch(value, arr)