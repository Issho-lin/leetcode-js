/*
 * @Author: linqibin
 * @Date: 2022-10-21 15:09:59
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-24 14:43:41
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
    return toSortList(head, null)
};
var toSortList = function(head, tail) {
    if (!head) {
        return head
    }
    if (head.next === tail) {
        head.next = null
        return head
    }
    let fast = head, slow = head
    // 快慢指针确定中间节点
    while (fast !== tail && fast.next !== tail) {
        fast = fast.next.next
        slow = slow.next
    }
    const mid = slow
    // 递归拆分到最小，然后排序合并再返回
    const left = toSortList(head, mid)
    const right = toSortList(mid, tail)
    return merge(left, right)
}
var merge = function(head1, head2) {
    const head = new ListNode(-1)
    let temp = head, temp1 = head1, temp2 = head2
    while (temp1 || temp2) {
        if (!temp1) {
            temp.next = temp2
            temp2 = null
        } else if (!temp2) {
            temp.next = temp1
            temp1 = null
        } else if (temp1.val < temp2.val) {
            temp.next = temp1
            temp1 = temp1.next
        } else {
            temp.next = temp2
            temp2 = temp2.next
        }
        temp = temp.next
    }
    return head.next
}
// @lc code=end

