/*
 * @Author: linqibin
 * @Date: 2022-12-15 18:33:31
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 18:37:27
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const freqMap = new Map()
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1)
    }
    nums.sort((a, b) => {
        const freqA = freqMap.get(a), freqB = freqMap.get(b)
        if (freqA === freqB) {
            return b - a
        }
        return freqA - freqB
    })
    return nums
};
// @lc code=end

