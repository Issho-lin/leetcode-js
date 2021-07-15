/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const ans = []
    const q = []
    for (let i = 0; i < nums.length; i++) {
        while (q.length && nums[i] > nums[q[q.length - 1]]) {
            q.pop()
        }
        q.push(i)
        if (i >= k) {
            while (q[0] <= i - k) {
                q.shift()
            }
        }
        if (i >= k - 1) {
            ans.push(nums[q[0]])
        }
    }
    return ans
};
// @lc code=end

