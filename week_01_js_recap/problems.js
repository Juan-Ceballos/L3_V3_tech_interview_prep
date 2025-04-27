// Reverse a string
function reverseString(str) {
    let resultStr = ""
    for (let char of str) {
        resultStr = char + resultStr
    }

    return resultStr
}
  
// Find max in array
function findMax(arr) {
    let resultNum = arr[0]

    for (let num of arr) {
        if (num > resultNum) {
            resultNum = num
        }
    }

    return resultNum
}

// Check if palindrome
function isPalindrome(word) {
    var tempStr = word
    var res = ""
    for (let char of word) {
        currChar = tempStr.slice(-1)
        tempStr = tempStr.slice(0, -1)
        if (char !== currChar) {
            return false
        }
    }
    return true   
}

module.exports = { reverseString, findMax, isPalindrome };