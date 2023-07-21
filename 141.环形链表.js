/*
 * @Author: linqibin
 * @Date: 2022-10-21 11:48:00
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-21 11:50:40
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let p = head, q = head
    while (p && p.next) {
        p = p.next.next
        q = q.next
        if (p === q) {
            return true
        }
    }
    return false
};
// @lc code=end

