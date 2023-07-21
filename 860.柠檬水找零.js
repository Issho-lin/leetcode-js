/*
 * @Author: linqibin
 * @Date: 2022-11-22 16:50:44
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-22 17:18:52
 * @Description:
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const map = new Map([[5, 0], [10, 0]])
    for (const bill of bills) {
        const fiveCount = map.get(5)
        const tenCount = map.get(10)
        switch (bill) {
            case 5:
                map.set(5, (fiveCount || 0) + 1)
                break
            case 10:
                // 找5元
                if (!fiveCount) {
                    return false
                }
                map.set(5, fiveCount - 1)
                map.set(10, (tenCount || 0) + 1)
                break
            case 20:
                // 找15元，1张10元+1张5元 或 3张5元
                if (!fiveCount) {
                    return false
                }
                if (!tenCount && fiveCount < 3) {
                    return false
                }
                if (tenCount) {
                    map.set(10, tenCount - 1)
                    map.set(5, fiveCount - 1)
                } else {
                    map.set(5, fiveCount - 3)
                }
                break
        
            default:
                break
        }
    }
    return true
};

// lemonadeChange([5,5,5,10,5,5,10,20,20,20])
// @lc code=end

