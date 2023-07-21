/*
 * @Author: linqibin
 * @Date: 2022-11-23 08:44:45
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-23 08:50:10
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=888 lang=javascript
 *
 * [888] 公平的糖果交换
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const aliceSum = aliceSizes.reduce((a, b) => a + b)
    const bobSum = bobSizes.reduce((a, b) => a + b)
    const exchangeDiff = (aliceSum - bobSum) / 2
    for (let i = 0; i < aliceSizes.length; i++) {
        const bobCount = aliceSizes[i] - exchangeDiff
        for (let j = 0; j < bobSizes.length; j++) {
            if (bobSizes[j] === bobCount) {
                return [aliceSizes[i], bobSizes[j]]
            }
        }
    }
};
// @lc code=end

