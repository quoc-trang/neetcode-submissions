class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let count = 0;

        for(const num of set){
            if(!set.has(num-1)){
                let length = 1;
                let j = 1;
                while(set.has(num+j)){
                    j++
                    length++
                }
                j=1;
                count = Math.max(length, count)
            }
        }

        return count;
    }
}
