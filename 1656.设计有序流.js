/*
 * @Author: linqibin
 * @Date: 2022-12-16 14:56:57
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-20 10:23:26
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.ptr = 0
    this.list = new Array(n).fill('')
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    this.list[idKey - 1] = value
    if (idKey - 1 !== this.ptr) {
        return []
    }
    const stack = []
    for (let i = idKey - 1; i < this.list.length; i++) {
        if (!this.list[i]) {
            this.ptr = i
            break
        }
        stack.push(this.list[i])
    }
    return stack
};

// const os = new OrderedStream(5);
// os.insert(3, 'ccccc')
// os.insert(1, "aaaaa")
// os.insert(2, "bbbbb")
// os.insert(5, "eeeee")
// os.insert(4, "ddddd")
/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end

