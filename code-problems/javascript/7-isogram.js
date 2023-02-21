// write a function that determines if a word is an isogram

let example = "tomato"
let example2 = "help"
let example3 = "six year old"

let evaluator = (string) =>{

    string = string.toLowerCase()
    string = string.replace("-","").replace(' ', '')
    
    let letters = new Set(string)

    if (string.length !== letters.size){
        return false
    }
    return true

}

console.log(evaluator(example2))