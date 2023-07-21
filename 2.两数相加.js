/*
 * @Author: linqibin
 * @Date: 2022-10-10 15:13:50
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 14:31:45
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const head = new ListNode(-1)
  let val = 0, p = head
  while (l1 || l2 || val) {
    if (l1) {
      val += l1.val
      l1 = l1.next
    }
    if (l2) {
      val += l2.val
      l2 = l2.next
    }
    p.next = new ListNode(val % 10)
    p = p.next
    val = val / 10 >> 0
  }
  return head.next
};
// @lc code=end

