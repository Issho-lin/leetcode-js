/*
 * @Author: linqibin
 * @Date: 2022-11-14 11:14:02
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-14 14:59:49
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const ans = new Array(nums.length).fill(-Infinity)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                ans[i] = nums[j]
                count++
                break
            }
        }
    }
    for (let i = 0; i < ans.length; i++) {
        if (ans[i] === -Infinity) {
            for (let j = 0; j < i; j++) {
                if (nums[j] > nums[i]) {
                    ans[i] = nums[j]
                    break
                }
            }
        }
    }
    return ans.map(item => item > -Infinity ? item : -1)
};

// @lc code=end

