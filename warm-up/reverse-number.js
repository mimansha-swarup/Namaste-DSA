/*
Problem Statement:
Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed.
If the reversed value overflows the 32-bit signed integer range, return 0.

Example:
Input:123

Output:321

Input:-123

Output:-321

Input:1534236469

Output:0 (overflow)

*/ 

const reverse = (num) =>{
    let num1 = num
    let rev = 0

    if(num <0){
        num1 = Math.abs(num1)
    }

    while(num1>0){
        rev = rev*10 + num1%10
        num1 = Math.floor(num1/10)
    }

    return num < 0 ? -rev : rev

    

}

console.log(reverse(1234))
console.log(reverse(-9831234))