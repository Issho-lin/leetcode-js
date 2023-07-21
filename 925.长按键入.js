/*
 * @Author: linqibin
 * @Date: 2022-11-23 18:32:49
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 08:42:25
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=925 lang=javascript
 *
 * [925] 长按键入
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    if (name === typed) {
        return true
    }
    if (name.length > typed.length) {
        return false
    }
    if (name.length === typed.length && name !== typed) {
        return false
    }
    let idx = 0
    for (let i = 0; i < typed.length; i++) {
        // if (idx === name.length) {
        //     if (typed[i] !== typed[i - 1]) {
        //         return false
        //     }
        // }
        if (typed[i] !== name[idx]) {
            if (i === 0) {
                return false
            }
            if (typed[i] !== typed[i - 1]) {
                return false
            }
        } else {
            if (idx < name.length) {
                idx++
            }
        }
    }
    return idx === name.length
};
// @lc code=end

