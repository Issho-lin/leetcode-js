/*
 * @Author: linqibin
 * @Date: 2022-11-18 16:02:24
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-18 16:21:21
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    // 从起点开始遍历，当遇到1时，这个1一定会把下一个0或1吃掉，因此这时需要跳过下一个。
    // 如果能遍历到最后一个0，就说明成功了。
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === 1) {
            i++
            continue
        }
        if (i === bits.length - 1) {
            return true
        }
    }
    return false
};
// @lc code=end

