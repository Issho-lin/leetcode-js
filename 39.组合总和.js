/*
 * @Author: linqibin
 * @Date: 2022-10-12 11:08:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:44:40
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const ans = []
    const dfs = (target, combine, idx) => {
        if (idx === candidates.length) {
            return
        }
        if (target === 0) {
            ans.push(combine)
            return
        }
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx)
        }
        dfs(target, combine, idx + 1)
    }
    dfs(target, [], 0)
    return ans
};
// @lc code=end

