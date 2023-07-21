/*
 * @Author: linqibin
 * @Date: 2022-12-20 11:20:17
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 11:41:24
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const str = ',' + arr.join(',') + ','
    let cnt = 0
    for (let i = 0; i < pieces.length; i++) {
        if (!str.includes(',' + pieces[i].join(',') + ',')) {
            return false
        }
        cnt += pieces[i].length
    }
    return cnt === arr.length
};

// canFormArray([15,88], [[88],[15]])
// @lc code=end

