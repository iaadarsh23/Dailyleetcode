function plusOne(digits) {
    let lastIndex = digits.length - 1;       // Find the index of the last element
    digits[lastIndex] += 1;                  // Add 1 to the last element
    return digits;
}

let digits = [1, 2, 3, 4];                  // Correctly define the digits array
console.log(plusOne(digits));                // Call the function with the digits array
