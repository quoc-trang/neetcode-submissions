class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const obj = {}
        for(let i = 0; i < s.length; i++){
            const char = s[i]
            obj[char] = (obj[char] || 0) + 1
        }


        for(let i = 0; i < t.length; i++){
            const char = t[i]
            if(obj[char] === undefined){
                return false
            }
            obj[char] -= 1
        }

        return !Object.values(obj).some(count => count !== 0)
    }
}
