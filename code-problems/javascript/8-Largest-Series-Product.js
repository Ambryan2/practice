// Instructions
// Given a string of digits, calculate the largest product for a contiguous substring of digits of length n.

// For example, for the input '1027839564', the largest product for a series of 3 digits is 270 (9 * 5 * 6), and the largest product for a series of 5 digits is 7560 (7 * 8 * 3 * 9 * 5).

// Note that these series are only required to occupy adjacent positions in the input; the digits need not be numerically consecutive.

// For the input '73167176531330624919225119674426574742355349194934', the largest product for a series of 6 digits is 23520.

// For a series of zero digits, the largest product is 1 because 1 is the multiplicative identity. (You don't need to know what a multiplicative identity is to solve this problem; it just means that multiplying a number by 1 gives you the same number.)

let example = '1027839564'
let series = 5
//answer should be 270 for 3 and 7560 for 5
let example2 = '73167176531330624919225119674426574742355349194934'
let series2 = 6


function largest_product(list,digit){
    //need to convert string into numbers
    let integers = []
    for (let i of list){
        integers.push(parseInt(i))
    }

    //this finds the largest product
    let product = 0
    for (let i = 0; i<integers.length;i++){
        let current = 1
        for (let j = 0; j<digit;j++){
            if(integers[i+j]===0){
                current = 0
                break
            }
            current *= integers[i+j]
        }
        if (current > product){
            product = current
        }
    }
    return product
}

console.log(largest_product(example, series))