/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack=[]
    let ans =""
    for(let i =0; i< s.length; i++){
        if(s[i]==="("){
            stack.push(s[i])
            if(stack.length > 1){
                ans+=s[i]
            }
        }else{
            stack.pop()
            if(stack.length >= 1){
                ans+=s[i]
            }
        }

    }
    return ans
};