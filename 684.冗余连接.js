/*
 * @lc app=leetcode.cn id=684 lang=javascript
 *
 * [684] 冗余连接
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const n = edges.length
    const uf = new UnionFind(n)
    for (const node of edges) {
        if (uf.connected(...node)) {
            return node
        } else {
            uf.unite(...node)
        }
    }
    return [0]
};
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(0).map((_item, index) => index)
        this.size = new Array(n).fill(1)
        this.count = n
    }
    getCount() {
        return this.count
    }
    findSet(idx) {
        if (this.parent[idx] === idx) {
            return this.parent[idx]
        }
        return this.findSet(this.parent[idx])
    }
    unite(idx1, idx2) {
        let r1 = this.findSet(idx1)
        let r2 = this.findSet(idx2)
        if (r1 === r2) {
            return false
        }
        if (this.size[r1] < this.size[r2]) {
            [r1, r2] = [r2, r1]
        }
        this.parent[r2] = r1
        this.size[r1] += this.size[r2]
        this.count--
        return true
    }
    connected(idx1, idx2) {
        return this.findSet(idx1) === this.findSet(idx2)
    }
}
// @lc code=end

