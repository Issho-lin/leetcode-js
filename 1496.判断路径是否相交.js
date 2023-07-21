/*
 * @Author: linqibin
 * @Date: 2022-12-05 16:55:32
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-06 18:26:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1496 lang=javascript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const set = new Set(['0,0'])
    let x = 0, y = 0
    for (const p of path) {
        switch (p) {
            case 'N':
                y++
                break
            case 'S':
                y--
                break
            case 'E':
                x++
                break
            case 'W':
                x--
                break
        
            default:
                break
        }
        const pos = x + ',' + y
        if (set.has(pos)) {
            return true
        }
        set.add(pos)
    }
    return false
};
// @lc code=end

