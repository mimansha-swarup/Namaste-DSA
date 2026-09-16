/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length
    let i  = n -1;
    while (i>0){
        if(s[i]!== " ") break
        i--
    }
    let count = 0 
    while(i >= 0){
        if(s[i] === " ") break
        i--
        count++
    }
    return count
    
};