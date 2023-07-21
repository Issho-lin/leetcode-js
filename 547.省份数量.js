/*
 * @Author: linqibin
 * @Date: 2022-11-15 10:16:51
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-15 11:18:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length
    const ufs = new UnionFindSet(n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isConnected[i][j] === 1) {
                ufs.merge(i, j)
            }
        }
    }
    return ufs.count
};

class UnionFindSet {
    constructor(n) {
        this.root = new Array(n).fill(0).map((_, idx) => idx)
        this.depth = new Array(n).fill(1)
        this.count = n
    }
    findRoot(idx) {
        if (this.root[idx] === idx) {
            return idx
        }
        return this.root[idx] = this.findRoot(this.root[idx])
    }
    merge(idx1, idx2) {
        let r1 = this.findRoot(idx1), r2 = this.findRoot(idx2)
        if (r1 === r2) {
            return false
        }
        const d1 = this.depth[r1], d2 = this.depth[r2]
        if (d1 < d2) {
            [r1, r2] = [r2, r1]
        }
        this.root[r2] = r1
        if (d1 === d2) {
            this.depth[r1]++
        }
        this.count--
        return true
    }
    getCount() {
        return this.count
    }
    connected(idx1, idx2) {
        return this.findRoot(idx1) === this.findRoot(idx2)
    }
}

// @lc code=end

