/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans =""
    let level = 0
    for(let i =0; i< s.length; i++){
        if(s[i]==="("){
            
            level++
            if(level> 1){
                ans+=s[i]
            }
        }else{
            level--
            if(level >= 1){
                ans+=s[i]
            }
        }

    }
    return ans
};