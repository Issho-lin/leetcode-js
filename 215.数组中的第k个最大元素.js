/*
 * @Author: linqibin
 * @Date: 2022-10-28 14:52:23
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-03 15:08:42
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap([])
    for (let i = 0; i < nums.length; i++) {
        minHeap.offer(nums[i])
        if (minHeap.size() > k) {
            minHeap.poll()
        }
    }
    return minHeap.peak()
};
class MinHeap{
    constructor(data) {
        this.data = data
        this.heapify()
    }
    size() {
        return this.data.length
    }
    // 构建堆结构
    heapify() {
        if (this.size() < 2) {
            return
        }
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }
    // 向上调整
    bubbleUp(idx) {
        while (idx) {
            let parentIdx = (idx - 1) >> 1
            if (this.data[idx] >= this.data[parentIdx]) {
                break
            }
            this.swap(idx, parentIdx)
            idx = parentIdx
        }
    }
    // 向下调整
    bubbleDown(idx) {
        const lastIdx = this.size() - 1
        while (idx < lastIdx) {
            let findIdx = idx
            let leftIdx = (idx * 2) + 1, rightIdx = (idx * 2) + 2
            if (leftIdx <= lastIdx && this.data[leftIdx] < this.data[findIdx]) {
                findIdx = leftIdx
            }
            if (rightIdx <= lastIdx && this.data[rightIdx] < this.data[findIdx]) {
                findIdx = rightIdx
            }
            if (findIdx === idx) {
                break
            }
            this.swap(findIdx, idx)
            idx = findIdx
        }
        
    }
    // 交换
    swap(idx1, idx2) {
        if (idx1 === idx2) {
            return
        }
        [this.data[idx1], this.data[idx2]] = [this.data[idx2], this.data[idx1]]
    }
    // 取顶
    peak() {
        if (!this.size()) {
            return null
        }
        return this.data[0]
    }
    // 弹顶
    poll() {
        if (this.size() < 2) {
            return this.data.pop()
        }
        const res = this.data[0]
        this.data[0] = this.data.pop()
        this.bubbleDown(0)
        return res
    }
    // 添加
    offer(item) {
        this.data.push(item)
        if (this.size() > 1) {
            this.bubbleUp(this.size() - 1)
        }
    }
}
// @lc code=end

