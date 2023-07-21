/*
 * @Author: linqibin
 * @Date: 2022-10-26 11:35:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-28 11:16:33
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length
    if (!m) {
        return 0
    }
    const n = grid[0].length
    const ufs = new UnionFindSet(m * n)
    let count = 0
    // 统计所有‘1’的数量，后面每合并一个‘1’，数量就-1
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                count++
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                if (i - 1 >= 0 && grid[i - 1][j] === '1') {
                    ufs.merge(i * n + j, (i - 1) * n + j) && count--
                }
                if (i + 1 < m && grid[i + 1][j] === '1') {
                    ufs.merge(i * n + j, (i + 1) * n + j) && count--
                }
                if (j - 1 >= 0 && grid[i][j - 1] === '1') {
                    ufs.merge(i * n + j, i * n + j - 1) && count--
                }
                if (j + 1 < n && grid[i][j + 1] === '1') {
                    ufs.merge(i * n + j, i * n + j + 1) && count--
                }
            }
        }
    }
    return count
}

class UnionFindSet {
    constructor(n) {
        // 存储每个元素的根元素
        this.parent = new Array(n).fill(0).map((_, idx) => idx)
        // 存储每个元素的深度，其实主要根元素的深度
        this.depth = new Array(n).fill(1)
        // 合并完成之后总共有几个集合
        this.count = n
    }
    // 查找每个元素的根元素
    findRoot(idx) {
        // 根元素的父节点是自己
        if (this.parent[idx] === idx) {
            return idx
        }
        // 压缩路劲，递归查找根元素的过程中，把父元素更新为根元素
        return this.parent[idx] = this.findRoot(this.parent[idx])
    }
    // 合并
    merge(idx1, idx2) {
        // 先找到各自的根元素
        const r1 = this.findRoot(idx1), r2 = this.findRoot(idx2)
        // 根元素相等，说明本身就同属一个集合，不需要再合并了
        if (r1 === r2) {
            return false
        }
        // 查出各自根元素的深度
        const d1 = this.depth[r1], d2 = this.depth[r2]
        // 把深度小的合并到深度大的
        if (d1 <= d2) {
            this.parent[r1] = r2
        } else {
            this.parent[r2] = r1
        }
        // 如果深度相当，则新的根元素深度势必+1
        if (d1 === d2) {
            this.depth[r2]++
        }
        // 每合并完一个新集合，总集合数-1
        this.count--
        return true
    }
}

// @lc code=end

