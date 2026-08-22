/*

Problem Statement:
Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1)extra memory.

Examples:
Example 1:
Input:s = [“h”,”e”,”l”,”l”,”o”]

Output:[“o”,”l”,”l”,”e”,”h”]

Example 2:
Input:s = [“H”,”a”,”n”,”n”,”a”,”h”]

Output:[“h”,”a”,”n”,”n”,”a”,”H”]
*/ 

const reverseString = (s) =>{
   for(let i =0; i<s.length/2; i++){
     const lastI = s.length-1-i
    const temp = s[i]
    s[i]=s[lastI]
    s[lastI]=temp
    
   }
   return s
}

console.log(reverseString(["h","e","l","l","o"]))
