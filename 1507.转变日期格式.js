/*
 * @Author: linqibin
 * @Date: 2022-12-05 16:40:09
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-05 16:45:42
 * @Description:
 *
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved.
 */
/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    const [day, month, year] = date.split(" ")
    const Month = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    }
    const intDay = parseInt(day)
    return year + '-' + Month[month] + '-' + (intDay < 10 ? `0${intDay}` : intDay)
};
// @lc code=end
