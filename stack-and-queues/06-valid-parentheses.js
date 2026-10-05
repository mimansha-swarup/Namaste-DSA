/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  const map = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    
    const s = []
    for(let i =0; i< str.length; i++){
        if(map[str[i]]){
            s.push(str[i])
        }else{
            const el = s.pop()
            if(map[el] !== str[i]) return false
        }
    }
    return s.length === 0 
    
};