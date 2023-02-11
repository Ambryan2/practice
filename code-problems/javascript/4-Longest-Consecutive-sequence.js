// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

let example = [0,3,7,2,5,8,4,6,0,1]
//output should be 9
let example2 = [100,4,200,1,3,2]
//output should be 4

function longestConsecutive(nums){
    let set = new Set(nums) //this will get rid of duplicates
    // let test = Array.from(set) //this will make an array from a set
    // console.log(test)
    let bla = Array.from(set).length
    console.log(bla)
    let answer = 0

    for (let num of nums){
        if(!set.has(num-1)){ //indicates the beginning of consecutive numbers
            let length = 0 //keeps track of length of consecutive
            while(set.has(num)){ //.has returns true if value exist kind of like in for python
                num++
                length++
            }
            answer = Math.max(answer,length)
        }
    }


    return answer
}

console.log(longestConsecutive(example2))