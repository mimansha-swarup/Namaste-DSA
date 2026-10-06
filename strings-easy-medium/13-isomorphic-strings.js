

// My solution O(n2)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length ) return false
    const map ={}
    for(let i = 0; i<s.length; i++){
        if(!map[s[i]]){
            const vals = Object.values(map)
            if(vals.includes(t[i])) return false
            map[s[i]] = t[i]
        }
        else if (map[s[i]]!==t[i]) return false
    }

    return true
    
};


// Optimised solution O(n)

