// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.
let list = [2,6,23,89,3,4]
let goal = 92

const twoSum = (nums,target)=>{
    let storage = {}
    for (let i=0;i<nums.length; i++){
        let ideal = target - nums[i]
        if (storage[ideal]){
            return [storage[ideal], i]
        }
        else{
            storage[nums[i]]=i
        }
    }
    return false
}

console.log(twoSum(list,goal))