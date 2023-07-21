/*
 * @Author: linqibin
 * @Date: 2022-11-24 08:47:05
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-24 08:54:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    const set = new Set()
    for (const email of emails) {
        const [local, domain] = email.split('@')
        let address = ''
        for (const char of local) {
            if (char === '.') {
                continue
            }
            if (char === '+') {
                break
            }
            address += char
        }
        address += `@${domain}`
        set.add(address)
    }
    return set.size
};
// @lc code=end

