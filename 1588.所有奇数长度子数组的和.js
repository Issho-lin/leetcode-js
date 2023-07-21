/*
 * @Author: linqibin
 * @Date: 2022-12-15 14:54:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-15 15:19:07
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1588 lang=javascript
 *
 * [1588] 所有奇数长度子数组的和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const n = arr.length
    let sum = 0
    for (let i = 0; i < n; i++) {
        // arr[i]左边有i个数，右边有 n-i-1 个数
        const leftCount = i, rightCount = n - i - 1
        // 如果要从arr[i]左右两侧挑出一些元素和arr[i]拼成奇数长度的子数组，
        // 要么从左右两边各挑奇数个元素，要么从左右两边各挑偶数个元素
        const leftOdd = (1 + leftCount) / 2 >> 0, rightOdd = (1 + rightCount) / 2 >> 0
        const leftEven = (leftCount / 2 >> 0) + 1, rightEven = (rightCount / 2 >> 0) + 1
        // arr[i]可以和左右两边的元素组成奇数长度子数组的组合方式总共有：
        const count = leftOdd * rightOdd + leftEven * rightEven
        // arr[i]贡献的值
        sum += arr[i] * count
    }
    return sum
};
// @lc code=end

