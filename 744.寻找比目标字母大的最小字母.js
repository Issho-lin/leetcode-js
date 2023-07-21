/*
 * @Author: linqibin
 * @Date: 2022-11-18 17:49:38
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 17:50:17
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] > target) {
            return letters[i]
        }
    }
    return letters[0]
};
// @lc code=end

