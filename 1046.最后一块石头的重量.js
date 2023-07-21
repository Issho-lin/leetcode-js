/*
 * @Author: linqibin
 * @Date: 2022-11-29 09:22:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-29 10:03:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap(stones)
    while (maxHeap.size() > 1) {
        const y = maxHeap.poll()
        const x = maxHeap.poll()
        if (y > x) {
            maxHeap.offer(y - x)
        }
    }
    if (maxHeap.size() === 0) {
        return 0
    }
    return maxHeap.peak()
};
class MaxHeap {
    constructor(data) {
        this.data = data
        this.heapify()
    }
    size() {
        return this.data.length
    }
    swap(i, j) {
        if (i === j) {
            return
        }
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    heapify() {
        if (this.size() < 2) {
            return
        }
        for (let i = 0; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }
    bubbleUp(idx) {
        while (idx) {
            const parentIdx = (idx - 1) / 2 >> 0
            if (this.data[idx] <= this.data[parentIdx]) {
                break
            }
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    bubbleDown(idx) {
        const lastIdx = this.size() - 1
        while (idx < lastIdx) {
            const leftIdx = idx * 2 + 1, rightIdx = idx * 2 + 2
            let findIdx = idx
            if (leftIdx <= lastIdx && this.data[leftIdx] > this.data[findIdx]) {
                findIdx = leftIdx
            }
            if (rightIdx <= lastIdx && this.data[rightIdx] > this.data[findIdx]) {
                findIdx = rightIdx
            }
            if (findIdx === idx) {
                break
            }
            this.swap(idx, findIdx)
            idx = findIdx
        }
    }
    offer(val) {
        this.data.push(val)
        this.bubbleUp(this.size() - 1)
    }
    poll() {
        if (this.size() < 2) {
            return this.data.pop()
        }
        const res = this.data[0]
        this.data[0] = this.data.pop()
        this.bubbleDown(0)
        return res
    }
    peak() {
        return this.data[0]
    }
}
// @lc code=end

