/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s=[...s]
    for(let i = 0; i<s.length ; i+=2*k){
        let n = Math.min(k, s.length - i)
        const mid = Math.floor(n/2)
        for (let j = 0; j<mid ; j++){
            const temp = s[j +i]
            s[j+i] = s[i+n-j-1]
            s[i+n-j-1] = temp
        }
    }
    s= s.join("")
    return s
};