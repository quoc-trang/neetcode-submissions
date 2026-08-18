class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let left = 1;
        
        for(let i = 0; i< nums.length; i++){
            left *= nums[i]
            result.push(left)
        }

        let right = 1;
        for(let i = nums.length-1; i >= 0; i--){
            result[i] = right * (result[i-1] ?? 1)
            right *= nums[i];
        }

        return result;

    }
}
