/*
 * @Author: linqibin
 * @Date: 2022-11-03 09:04:56
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 15:18:36
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的 K 对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
 var kSmallestPairs = function(nums1, nums2, k) {
    const heap = new MaxHeap([])
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            heap.offer([nums1[i], nums2[j]])
            if (heap.size() > k) {
                heap.poll()
            }
        }
    }
    return heap.data
};
class MaxHeap {
    constructor(data) {
        this.data = data
    }
    size() {
        return this.data.length
    }
    getSum(idx) {
        const [a, b] = this.data[idx]
        return a + b
    }
    heapify() {
        if (this.size() < 2) {
            return
        }
        for (let i = 0; i < this.size(); i++) {
            this.bubbleDown(i)
        }
    }
    swap(i, j) {
        if (i === j) {
            return
        }
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    bubbleDown(idx) {
        let findIdx = idx, lastIdx = this.size() - 1
        while (idx < lastIdx) {
            const left = idx * 2 + 1, right = idx * 2 + 2
            if (left <= lastIdx && this.getSum(left) > this.getSum(findIdx)) {
                findIdx = left
            }
            if (right <= lastIdx && this.getSum(right) > this.getSum(findIdx)) {
                findIdx = right
            }
            if (idx === findIdx) {
                break
            }
            this.swap(idx, findIdx)
            idx = findIdx
        }
    }
    bubbleUp(idx) {
        while (idx) {
            const parentIdx = (idx - 1) / 2  >> 0
            if (this.getSum(idx) <= this.getSum(parentIdx)) {
                break
            }
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    peak() {
        if (!this.size()) {
            return null
        }
        return {
            data: this.data[0],
            sum: this.getSum(0)
        }
    }
    poll() {
        if (this.size() < 2) {
            return this.data.pop()
        }
        const ret = this.data[0]
        this.data[0] = this.data.pop()
        this.bubbleDown(0)
        return ret
    }
    offer(item) {
        this.data.push(item)
        if (this.size() < 2) {
            return
        }
        this.bubbleUp(this.size() - 1)
    }
}
// @lc code=end

