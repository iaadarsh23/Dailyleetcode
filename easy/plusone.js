// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let lastindex=digits.length -1;
    let seclast=digits.length -2;
    if (lastindex===9){
        digits[lastindex]=0;
        digits[seclast]+=1;
        
    }else{
        digits[lastindex]+=1;
    }
    
    return digits;
    
};