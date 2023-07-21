/*
 * @Author: linqibin
 * @Date: 2022-12-16 11:23:36
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 11:28:11
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1629 lang=javascript
 *
 * [1629] 按键持续时间最长的键
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let max = releaseTimes[0], char = keysPressed[0]
    for (let i = 1; i < releaseTimes.length; i++) {
        const time = releaseTimes[i] - releaseTimes[i - 1]
        if (time === max) {
            if (keysPressed[i] > char) {
                char = keysPressed[i]
            }
        } else if (time > max) {
            max = time
            char = keysPressed[i]
        }
    }
    return char
};
// @lc code=end

