/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
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
        this.right.push(num)
        this.right.sort((a, b) => b - a)
    }
    if (this.left.length - this.right.length > 1) {
        this.right.push(this.left.pop())
    } else if (this.right.length > this.left.length) {
        this.left.push(this.right.pop())
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.left.length === this.right.length) {
        return (this.left[this.left.length - 1] + this.right[this.right.length - 1]) / 2
    }
    return this.left[this.left.length - 1]
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

