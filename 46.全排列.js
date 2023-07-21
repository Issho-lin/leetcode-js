/*
 * @Author: linqibin
 * @Date: 2022-10-13 09:49:05
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 17:54:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const list = []
    dfs(list, nums, [])
    return list

};
var dfs = function(list, nums, stack) {
    if (stack.length === nums.length) {
        list.push([...stack])
        return
    }
    for (let i = 0; i < nums.length; i++) {
        if (stack.includes(nums[i])) {
            continue
        }
        stack.push(nums[i])
        dfs(list, nums, stack)
        stack.pop()
    }
}
// @lc code=end

