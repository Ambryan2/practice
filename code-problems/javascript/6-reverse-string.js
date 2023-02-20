// reverse a string without using any built in functions

let example="hello"
let example2 = 3

function reverse(word){
    let answer = ""
    for (let i=word.length-1; i>=0; i--){
        answer = answer + word[i]
    }
    debugger
    return answer
}


console.log(reverse(example))