/**
 * @param {string} s
 * @return {boolean}
 */

 isAplhaNum = (c) => (c.charCodeAt() >= "a".charCodeAt() && c.charCodeAt()<= "z".charCodeAt() ) || 
            (c.charCodeAt()>= "0".charCodeAt() && c.charCodeAt()<= "9".charCodeAt() )
var isPalindrome = function(s) {
    s = s.toLowerCase()
     let i =0;
     let j = s.length-1

     while(i<j){
        if(!isAplhaNum(s[i])){
            i++
        }
        else if(!isAplhaNum(s[j])){
            j--
        }
        else  if(s[i] === s[j]) {
        i++;
        j--;
        }else return false
     }
    return true
};