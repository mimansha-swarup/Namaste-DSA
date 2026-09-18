/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let obj = {}
    for (let i = 0; i< s.length; i++){
        obj[s[i]] =  obj[s[i]] ? obj[s[i]]+1: 1
    }
    
    const vowels = ["a","e","i","o","u"]
    let v = 0, c=0;
    for(let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])){
            if(obj[s[i]]> v){
                v= obj[s[i]]
            }

        }else{
            if(obj[s[i]]> c){
                c= obj[s[i]]
            }

        }
    }

 return v+c
};