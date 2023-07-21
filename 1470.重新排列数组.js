/*
 * @Author: linqibin
 * @Date: 2022-12-06 16:23:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 17:14:49
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    for (let i = 0; i < 2 * n; i++) {
        if (nums[i] > 0) {
            let j = i
            while (nums[i] > 0) {
                // 小于 n 的变成 0 2 4 6 8 10... ；n 到 2n 之间的变成 1 3 5 7 9 ...
                j = j < n ? 2 * j : 2 * (j - n) + 1
                ;[nums[i], nums[j]] = [nums[j], nums[i]]
                nums[j] = -nums[j]
            }
        }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = -nums[i]
    }
    return nums
};
shuffle([1,2,3,4,4,3,2,1], 4)
// @lc code=end

