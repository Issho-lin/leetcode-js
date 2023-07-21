/*
 * @Author: linqibin
 * @Date: 2023-04-03 15:44:14
 * @LastEditors: linqibin
 * @LastEditTime: 2023-04-03 15:44:56
 * @Description: 
 * 
 * Copyright (c) 2023 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 1. 合并数组
    let arr = [];
    for (let i = 0; i < lists.length; i++) {

        let node = lists[i];
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
    }
    // 2. 排序
    arr.sort((a, b) => a - b);
    // 3. 生成链表
    let head = new ListNode();
    let node = head;
    for (let i = 0; i < arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return head.next;
    
};
// @lc code=end

