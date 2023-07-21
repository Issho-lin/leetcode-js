/*
 * @Author: linqibin
 * @Date: 2022-12-16 14:29:26
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-16 14:36:59
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let cnt = 0, str = word
    while (sequence.includes(str)) {
        str = word.repeat(++cnt + 1)
    }
    return cnt
};

// maxRepeating('ababc', 'ab')
// @lc code=end

