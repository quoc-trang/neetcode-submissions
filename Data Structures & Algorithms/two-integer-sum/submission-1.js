class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            const complement = target - num
            if(!map.has(num)){
                map.set(num, i)
            }

            if(map.has(complement) && map.get(complement) !== i){
                return [map.get(complement), i]
            }
        }
    }
}
