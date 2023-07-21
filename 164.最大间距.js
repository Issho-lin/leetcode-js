/*
 * @Author: linqibin
 * @Date: 2022-10-24 10:09:34
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-24 14:27:19
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const n = nums.length
    if (n < 2) {
        return 0
    }
    const buf = new Array(n).fill(0)
    let exp = 1
    const max = Math.max(...nums)
    while (max >= exp) {
        const cnt = new Array(10).fill(0) // 下标代表 0-9 10个数字
        for (let i = 0; i < n; i++) {
            // 取出每一位的数字
            const digit = Math.floor(nums[i] / exp) % 10
            // 记录拥有相同位数的数字有多少个
            cnt[digit]++
        }
        for (let i = 1; i < cnt.length; i++) {
            // 计算前缀和，确定每个位数的位置，比如cnt[3] = 4,说明位数小于等于3的数总共有4个，那么位数等于4的数应该从第5位开始排列（数组下标为4）
            cnt[i] += cnt[i - 1]
        }
        for (let i = n - 1; i >= 0; i--) {
            // 从后往前依次取出每个位数，确定位置
            const digit = Math.floor(nums[i] / exp) % 10
            buf[--cnt[digit]] = nums[i]
        }
        nums.splice(0, n, ...buf)
        exp *= 10
    }
    let res = 0
    for (let i = 1; i < n; i++) {
        res = Math.max(res, nums[i] - nums[i - 1])
    }
    return res
};
// @lc code=end

