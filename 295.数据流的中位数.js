/*
 * @Author: linqibin
 * @Date: 2022-11-01 15:07:44
 * @LastEditors: linqibin
 * @LastEditTime: 2022-11-01 15:53:56
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start

var MedianFinder = function() {
    this.left = []
    this.right = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (!this.left.length || num <= this.left[this.left.length - 1]) {
        this.left.push(num)
        this.left.sort((a, b) => a - b)
    } else {
        this.right.unshift(num)
        this.right.sort((a, b) => a - b)
    }
    if (this.right.length > this.left.length) {
        this.left.push(this.right.shift())
    } else if (this.left.length - this.right.length > 1) {
        this.right.unshift(this.left.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.left.length > this.right.length) {
        return this.left[this.left.length - 1]
    } else {
        return (this.left[this.left.length - 1] + this.right[0]) / 2
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

