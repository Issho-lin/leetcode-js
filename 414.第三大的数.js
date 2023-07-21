/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const heap = new MaxHeap(nums)
    if (heap.size() < 3) {
        return heap.poll()
    }
    heap.poll()
    heap.poll()
    return heap.peak()
};
class MaxHeap {
    constructor(data) {
        this.data = [...new Set(data)]
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
        if (!this.data.length) {
            return
        }
        for (let i = 0; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }
    bubbleDown(idx) {
        const lastIdx = this.size() - 1
        while (idx < lastIdx) {
            let leftIdx = idx * 2 + 1, rightIdx = idx * 2 + 2, findIdx = idx
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
    bubbleUp(idx) {
        while (idx) {
            const parentIdx = (idx - 1) / 2 >> 0
            if (this.data[parentIdx] >= this.data[idx]) {
                break
            }
            this.swap(parentIdx, idx)
            idx = parentIdx
        }
    }
    peak() {
        if (!this.size()) {
            return null
        }
        return this.data[0]
    }
    offer(val) {
        this.data.push(val)
        if (this.size() > 1) {
            this.bubbleUp(this.size() - 1)
        }
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
}
// @lc code=end

