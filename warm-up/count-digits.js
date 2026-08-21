/*
Problem Statement:
Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

Examples:
Input:259

Output:3

Input:-1035

Output:4

Input:0

Output:1
*/ 

const countDigits = (n) =>{
    let count = 0
    if (n === 0) {
        return 1
    }
    while(n!=0){
        n = Math.floor(n / 10)
        count++
    }
    return count
}

console.log(countDigits(259))