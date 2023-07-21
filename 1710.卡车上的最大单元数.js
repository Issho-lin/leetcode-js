/*
 * @Author: linqibin
 * @Date: 2023-01-16 17:35:38
 * @LastEditors: linqibin
 * @LastEditTime: 2023-01-16 17:42:37
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1])
    let total = 0
    for (const [numberOfBoxes, numberOfUnitsPerBox] of boxTypes) {
        if (truckSize === 0) {
            return total
        }
        if (numberOfBoxes >= truckSize) {
            total += truckSize * numberOfUnitsPerBox
            truckSize = 0
        } else {
            total += numberOfBoxes * numberOfUnitsPerBox
            truckSize -= numberOfBoxes
        }
    }
    return total
};

// maximumUnits([[1,3],[2,2],[3,1]], 4)
// @lc code=end

