/*
 * @Author: linqibin
 * @Date: 2022-11-10 18:28:26
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-11 09:35:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=475 lang=javascript
 *
 * [475] 供暖器
 */

// @lc code=start
/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    let ans = 0
    heaters.sort((a, b) => a - b)
    for (let i = 0; i < houses.length; i++) {
        // 二分查找当前房间所使用的heater，如果刚好找到，就用当前的，如果刚好介于两者之间，就先选用后者，如果只有一个heater，那就没得选择，只能用它
        const j = search(heaters, houses[i])
        // 计算当前房间到选用的heater之间的距离
        const a = Math.abs(houses[i] - heaters[j])
        // 1.如果j==0，说明只有一个heater，没得选择，肯定选a，把b构建成一个比a大的距离，最终选用a
        // 2.如果j!=0，选用的heater只可能当前房间的，或后一个房间的，考虑到前一个房间的距离有可能比后一个房间的距离要小，所有要比较一下，取小的
        const b = j > 0 ? Math.abs(houses[i] - heaters[j - 1]) : a + 1
        // 每个房间要用距离最近的heater，在这些所有的距离中，取最大的才可能保证覆盖所有房间
        ans = Math.max(ans, Math.min(a, b))
    }
    return ans
};
var search = function(nums, x) {
    let left = 0, right = nums.length - 1
    while (left < right) {
        const mid = (left + right) >> 1
        if (nums[mid] >= x) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}
// @lc code=end

