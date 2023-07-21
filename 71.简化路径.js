/*
 * @Author: linqibin
 * @Date: 2022-10-17 16:12:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-17 16:33:26
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    const paths = path.split('/')
    for (let i = 0; i < paths.length; i++) {
        const p = paths[i];
        if (!p || p === '.') {
            continue
        }
        if (p === '..') {
            stack.pop()
        } else {
            stack.push(p)
        }
    }
    return '/' + stack.join('/')
};
// @lc code=end

