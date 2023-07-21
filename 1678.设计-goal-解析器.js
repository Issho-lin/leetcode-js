/*
 * @Author: linqibin
 * @Date: 2022-12-16 14:21:44
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 14:25:14
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1678 lang=javascript
 *
 * [1678] 设计 Goal 解析器
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let res = ''
    for (let i = 0; i < command.length; i++) {
        if (command[i] === '(') {
            if (command[i + 1] === ')') {
                res += 'o'
                i++
                continue
            }
            if (command[i + 1] === 'a') {
                res += 'al'
                i += 3
                continue
            }
        } else if (command[i] === 'G') {
            res += 'G'
        }
    }
    return res
};
// @lc code=end

