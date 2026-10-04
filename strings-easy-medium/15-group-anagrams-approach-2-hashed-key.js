/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj ={}
    for(let i =0; i<strs.length; i++){
       let arr = Array(26).fill(0)
       for(let ch = 0;ch< strs[i].length; ch++){
        let idx = strs[i][ch].charCodeAt(0) -  "a".charCodeAt(0)
        arr[idx] = arr[idx] ? arr[idx]+1 :1
       }

       let chars = arr.join("#")
        if(obj[chars]){
            obj[chars] = [...obj[chars], strs[i] ]
        }else{
            obj[chars] = [strs[i]] 

        }
    }
    return Object.values(obj)
};