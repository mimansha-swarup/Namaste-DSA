/*
Problem Statement:
Write a function isPalindrome(x) that takes an integer x and returns true if it reads the same backward and forward; 
otherwise false.


Examples:
Input:121

Output:true

Input:-121

Output:false

Input:10

Output:false

*/ 

const isPalindrome = (x) =>{
    let rev = 0
    let y = x
    console.log(x)

    if(y<0){        
        return false
    }
    
    while(y>0){
        let digit = y%10
        rev = rev *10 + digit
        y = Math.floor(y/10)
    }

    return rev === x


}

console.log(isPalindrome(1213))