/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) {
        return
      }
      let fast = head
      let slow = head
      while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
      }
      fast = slow.next
      slow.next = null
      slow = head
      let pre = null
      let cur = fast
      while (cur) {
        [cur.next, pre, cur] = [pre, cur, cur.next]
      }
      fast = pre
      while (fast) {
        let next1 = slow.next
        let next2 = fast.next
        slow.next = fast
        fast.next = next1
        slow = next1
        fast = next2
      }
};
// @lc code=end

