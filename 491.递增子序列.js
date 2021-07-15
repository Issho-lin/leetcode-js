/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const len = nums.length
    const res = []
    const set = new Set()
    const dfs = (start, path) => {
        if (path.length >= 2) {
            const str = path.toString()
            if (!set.has(str)) {
                set.add(str)
                res.push([...path])
            }
        }
        for (let i = start; i < len; i++) {
            const pre = path[path.length - 1]
            const cur = nums[i]
            if (path.length === 0 || pre <= cur) {
                path.push(cur)
                dfs(i + 1, path)
                path.pop()
            }
        }
    }
    dfs(0, [])
    return res
};
// @lc code=end

