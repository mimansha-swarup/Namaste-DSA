/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const res = []
    for(let i = 0; i< words.length ;i++){
        for(let j = 0 ; j<words[i].length; j++){
            if(words[i][j] === x) {
                res.push(i)
                break
            }
        }
    }

    return res
    
};