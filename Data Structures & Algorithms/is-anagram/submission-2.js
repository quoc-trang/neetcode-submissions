class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const seen = new Map()
        for(const char of s){
            seen.set(char, (seen.get(char) ?? 0) + 1)
        }

        for(const char of t){
            if(!seen.has(char)) return false
            const nextValue = seen.get(char) - 1
            seen.set(char, nextValue)

            if(seen.get(char) < 0) return false
        }

        for(const [char, count] of seen){
            if(count !== 0) return false
        }

        return true
    }
}
