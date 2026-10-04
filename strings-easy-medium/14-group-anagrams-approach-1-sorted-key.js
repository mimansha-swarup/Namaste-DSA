/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const obj ={}
    for(let i =0; i<strs.length; i++){
        let chars =[...strs[i]].sort().join("")
        if(obj[chars]){
            obj[chars] = [...obj[chars], strs[i] ]
        }else{
            obj[chars] = [strs[i]] 

        }
    }
    return Object.values(obj)
};