/*
 * @Author: linqibin
 * @Date: 2023-02-02 17:02:26
 * @LastEditors: linqibin
 * @LastEditTime: 2023-02-02 17:05:54
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1859 lang=javascript
 *
 * [1859] 将句子排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const newS = s.split(' ').sort((a, b) => {
        return (+a[a.length - 1]) - (+b[b.length - 1])
    }).join(' ')
    let str = ''
    for (let i = 0; i < newS.length; i++) {
        if (/[0-9]/.test(newS[i])) {
            continue
        }
        str += newS[i]
    }
    return str
};
// @lc code=end

