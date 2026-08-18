class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for(int num : nums){
            map.merge(num, 1, Integer::sum);
        }


        return map.entrySet().stream()
                  .sorted(Map.Entry.<Integer,Integer>comparingByValue().reversed())
                  .limit(k)
                  .mapToInt(Map.Entry::getKey)
                  .toArray();
    }
}