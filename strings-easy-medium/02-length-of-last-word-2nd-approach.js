/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let n = s.length
    let i  = n -1;
    let count = 0 
    while(i >= 0){
        if(s[i] !== " ") count++
        else if( count > 0) break
        i--
    }
    return count
    
};