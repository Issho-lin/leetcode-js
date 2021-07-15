/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    if (!matchsticks.length) {
        return false
    }
    const allLen = matchsticks.reduce((a, b) => a + b)
    if (allLen % 4 !== 0) {
        return false
    }
    const sideLen = allLen / 4
    const sideList = new Array(4).fill(0)

    matchsticks.sort((a, b) => b - a)

    const dfs = index => {
        if (index === matchsticks.length) {
            return sideList.every(item => item === sideLen)
        } else {
            const targetLen = matchsticks[index]
            if (targetLen > sideLen) {
                return false
            }
            for (let i = 0; i < 4; i++) {
                if (sideList[i] + targetLen <= sideLen) {
                    sideList[i] += targetLen
                    if (dfs(index + 1)) {
                        return true
                    }
                    sideList[i] -= targetLen
                }
            }
        }
        return false
    }
    return dfs(0)
};
// @lc code=end

