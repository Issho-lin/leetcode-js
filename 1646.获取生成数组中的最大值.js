/*
 * @Author: linqibin
 * @Date: 2022-12-20 11:47:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 14:10:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    const nums = []
    let max = -Infinity
    for (let k = 0; k <= n; k++) {
        if (k < 2) {
            nums[k] = k
        } else {
            let i = k / 2 >> 0
            if (k % 2 === 0 && 2 <= k && k <= n) {
                nums[k] = nums[i]
            } else if (k % 2 === 1 && 2 <= k && k <= n) {
                nums[k] = nums[i] + nums[i + 1]
            }
        }
        if (nums[k] > max) {
            max = nums[k]
        }
    }
    // console.log(nums);
    return max
};

// getMaximumGenerated(5)
// @lc code=end

