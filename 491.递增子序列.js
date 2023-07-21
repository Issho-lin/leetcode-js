/*
 * @Author: linqibin
 * @Date: 2022-11-11 09:56:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 14:39:17
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
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
    const res = [], set = new Set()
    const dfs = (start, path) => {
        if (path.length > 1) {
            const str = path.toString()
            if (!set.has(str)) {
                set.add(str)
                res.push([...path])
            }
        }
        for (let i = start; i < nums.length; i++) {
            const prev = path[path.length - 1]
            const cur = nums[i]
            if (!path.length || cur >= prev) {
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

