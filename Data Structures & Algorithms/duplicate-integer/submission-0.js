class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj = {}
        for(let i = 0; i < nums.length; i++){
            const num = nums[i]
            if(obj[num] !== undefined){
                return true
            }else{
                obj[num] = 1
            }
        }
        return false
    }
}
