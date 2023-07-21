/*
 * @Author: linqibin
 * @Date: 2022-10-27 11:06:20
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-27 11:09:22
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head, prev = null
    while (cur) {
        [cur.next, prev, cur] = [prev, cur, cur.next]
    }
    return prev
};
// @lc code=end

