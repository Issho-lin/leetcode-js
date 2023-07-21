/*
 * @Author: linqibin
 * @Date: 2022-10-11 10:15:06
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-13 15:48:00
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const head = new ListNode(-1)
    let p = head, val = 0
    while (list1 || list2) {
        if (!list1) {
            val = list2.val
            list2 = list2.next
        } else if (!list2) {
            val = list1.val
            list1 = list1.next
        } else if (list1.val < list2.val) {
            val = list1.val
            list1 = list1.next
        } else {
            val = list2.val
            list2 = list2.next
        }
        p.next = new ListNode(val)
        p = p.next
    }
    return head.next
};
// @lc code=end

