/*
 * @Author: linqibin
 * @Date: 2022-11-21 11:15:04
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-21 11:30:28
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const map = new Map()
    for (let i = 0; i < licensePlate.length; i++) {
        if (/[A-Za-z]/.test(licensePlate[i])) {
            const key = licensePlate[i].toLowerCase()
            map.set(key, (map.get(key) || 0) + 1)
        }
    }
    let res = ''
    for (let i = 0; i < words.length; i++) {
        const itemMap = new Map(map)
        for (const char of words[i]) {
            if (itemMap.has(char)) {
                const count = itemMap.get(char)
                if (count - 1 === 0) {
                    itemMap.delete(char)
                } else {
                    itemMap.set(char, count - 1)
                }
            }
        }
        if (itemMap.size === 0) {
            if (!res || words[i].length < res.length) {
                res = words[i]
            }
        }
    }
    return res
};
// @lc code=end

