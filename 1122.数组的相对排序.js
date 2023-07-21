/*
 * @Author: linqibin
 * @Date: 2022-11-29 14:08:55
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 14:16:56
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const map = new Map()
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i)
    }
    arr1.sort((a, b) => {
        // 如果a,b都在arr2中，按照arr2中的顺序排列
        if (map.has(a) && map.has(b)) {
            return map.get(a) - map.get(b)
        }
        // 如果arr2中只有a或b，那么arr2中出现的排列靠前
        if (map.has(a)) {
            return -1
        }
        if (map.has(b)) {
            return 1
        }
        // 如果a，b都不在arr2中，则按正常升序排列
        return a - b
    })
    return arr1
};
// @lc code=end

