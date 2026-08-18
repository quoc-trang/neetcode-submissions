class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map()
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            map.set(num, 1)
        }

        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            let j = 1;
            let maxTemp = 1;

            while(map.has(num + j)){
                maxTemp++
                j++
            }
            j=1;

            count = Math.max(maxTemp, count)
        }

        return count
    }
}
