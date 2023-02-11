//Write a function that counts the amount of unopened parenthesis. For example ")(" would count two 
//while "()" would count zero

let example = "(()()"
let example2 = "(())((((())))(((()"
let example3 = "())))))"
let example4 = ""

// attempt 1

// function parenthesisCount(string){
//     let answer = 0
//     let right = string.length -1
//     for (let i=0;i<right;i++){
//         console.log(`comparison i:${string[i]} right: ${string[right]}`)
//         if (string[i]!==string[right]){
//             right--
//         }
//         else if (string[i] === "("){
//             while(string[right]!== ")" && right>i){
//                 console.log(`in loop`)
//                 answer++
//                 right--
//                 console.log("answer added")
//             }
            
//         }
//         else{
//             answer++
//             console.log("answer added")
//         }

//     }
//     return answer
// }

function parenthesisCount(string){
    let answer = []
    for (let i = 0; i<string.length;i++){
        let last = answer.length-1
        if (answer.length===0){
            answer.push(string[i])
        }
        else if(answer[last] === string[i]){
            answer.push(string[i])
        }
        else if(answer[last] !== ")"){
            answer.pop()
        }
    }
    console.log(answer)
    return answer.length
}

console.log(parenthesisCount(example2))