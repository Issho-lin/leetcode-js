/*
 * @Author: linqibin
 * @Date: 2023-02-10 14:27:46
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-10 14:31:42
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1880 lang=javascript
 *
 * [1880] 检查某单词是否等于两单词之和
 */

// @lc code=start
/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let firstNum = 0, secondNum = 0, targetNum = 0
    for (const char of firstWord) {
        firstNum = firstNum * 10 + (char.charCodeAt() - 97)
    }
    for (const char of secondWord) {
        secondNum = secondNum * 10 + (char.charCodeAt() - 97)
    }
    for (const char of targetWord) {
        targetNum = targetNum * 10 + (char.charCodeAt() - 97)
    }
    return firstNum + secondNum === targetNum
};
// @lc code=end

