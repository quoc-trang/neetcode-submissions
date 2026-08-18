class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            map.set(num, (map.get(num) || 0) + 1);
        }

        const sortedArr = Array.from(map.entries()).sort(([key1, value1], [key2, value2]) => value2 - value1);
        return sortedArr.slice(0, k).map(([key]) => key);
    }
}
