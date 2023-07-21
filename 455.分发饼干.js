/*
 * @Author: linqibin
 * @Date: 2022-11-09 10:52:29
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-09 10:58:03
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let num = 0, j = 0
    for (let i = 0; i < g.length; i++) {
        // 如果当前饼干符合胃口，就分发
        if (s[j] >= g[i]) {
            num++
        } else {
            // 如果不满足胃口，则，还是这个人，但是要往下找一块更大的饼干
            i--
        }
        j++
        // 如果饼干发完了，就直接结束
        if (j > s.length - 1) {
            break
        }
    }
    return num
};
// @lc code=end

