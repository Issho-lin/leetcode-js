/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const q = []
    let max = -Infinity, sum = 0
    for (let i = 0; i < nums.length; i++) {
        q.push(nums[i])
        sum += nums[i]
        if (q.length === k) {
            max = Math.max(max, sum / k)
            sum -= q.shift()
        }
    }
    return max
};
// @lc code=end

