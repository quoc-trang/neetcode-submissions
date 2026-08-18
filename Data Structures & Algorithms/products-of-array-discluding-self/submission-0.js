class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        let prefix = [];
        let postfix = [];
        let i = 0;
        let j = nums.length - 1;

        let left = 1;
        let right = 1;
        while(i < nums.length){
            const numL = nums[i];
            const numR = nums[j];
            left *= numL;
            right *= numR;
            prefix.push(left);
            postfix[j] = (right);
            i++;
            j--;
        }

        for(let i = 0; i< nums.length; i++){
            result[i] = (prefix[i-1] ?? 1) * (postfix[i+1] ?? 1)
        }

        return result;

    }
}
