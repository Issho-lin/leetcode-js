/*
 * @Author: linqibin
 * @Date: 2022-10-20 11:50:01
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-20 11:53:58
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const rows = rowIndex + 1
    const stack = []
    for (let i = 0; i < rows; i++) {
        if (i === 0) {
            stack.push([1])
        } else if (i === 1) {
            stack.push([1, 1])
        } else {
            let j = 0
            while (j <= i) {
                if (!stack[i]) {
                    stack.push([])
                }
                if (j === 0 || j === i) {
                    stack[i].push(1)
                } else {
                    const val = stack[i - 1][j - 1] + stack[i - 1][j]
                    stack[i].push(val)
                }
                j++
            }
        }
    }
    return stack[rowIndex]
};
// @lc code=end

