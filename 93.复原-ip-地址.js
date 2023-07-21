/*
 * @Author: linqibin
 * @Date: 2022-10-18 09:24:42
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 15:09:05
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const segments = new Array(4), ans = []
    const dfs = (idx /* segments下标 */, start /* s下标 */) => {
        // 如果segments已经装满了
        if (idx === 4) {
            // 如果s刚好用完
            if (start === s.length) {
                ans.push(segments.join('.'))
            }
            return
        }
        if (s[start] === '0') {
            segments[idx] = '0'
            dfs(idx + 1, start + 1)
            return
        }
        let res = 0
        for (let i = start; i < s.length; i++) {
            res = res * 10 + (+s[i])
            if (res >= 0 && res <= 255) {
                segments[idx] = res
                dfs(idx + 1, i + 1)
            }
        }
    }
    dfs(0, 0)
    return ans
};

restoreIpAddresses('101023')

// @lc code=end

