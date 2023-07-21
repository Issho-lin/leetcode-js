/*
 * @Author: linqibin
 * @Date: 2022-12-02 17:40:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-02 17:42:47
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let p = head
    let sum = 0
    while (p) {
        sum *= 2
        sum += p.val
        p = p.next
    }
    return sum
};
// @lc code=end

