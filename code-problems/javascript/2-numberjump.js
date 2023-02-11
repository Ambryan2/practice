//Write a function that when given an array of numbers determine if it can get across
//the number previous determines if how many places forward it can move
//ex: [0] would equal true, but [0,2] would be false

let example = [2,0,0,2,0]
let example2 = [3, 1, 3,0,0,2]

function jump(array){
    let distance = array.length - 1
    let check = 0
    for (let i = 0; i<array.length; i++){
        check--
        if (i>check && array[i]===0){
            return false
        }
        else if (i+array[i]>distance){
            return true
        }
        else if(check < i +array[i]){
            check = i+array[i]+1
        }
    }
    return false
}

console.log(jump(example2))