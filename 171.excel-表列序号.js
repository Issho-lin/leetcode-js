/*
 * @Author: linqibin
 * @Date: 2022-10-25 09:33:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-25 09:39:08
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res = 0
    for (let i = 0; i < columnTitle.length; i++) {
        const num = columnTitle.charCodeAt(i) - 64
        res += num * (26 ** (columnTitle.length - 1 - i)) 
    }
    return res
};
// @lc code=end

