class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for(let i = 0; i< strs.length; i++){
        
            const str = strs[i]
            const sortedStr = str.split('').sort().join('')

            if(!map.has(sortedStr)) map.set(sortedStr, [])
            map.get(sortedStr).push(str)
            
        }

        return [...map.values()];
    }
}
