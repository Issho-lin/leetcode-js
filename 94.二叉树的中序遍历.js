/*
 * @Author: linqibin
 * @Date: 2022-10-18 10:07:19
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 10:34:01
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const ans = []
    inorder(root, ans)
    return ans
};
var inorder = function(root, ans) {
    if (!root) {
        return
    }
    inorder(root.left, ans)
    ans.push(root.val)
    inorder(root.right, ans)
}
const root = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: {
                val: 8,
                left: null,
                right: null
            },
            right: {
                val: 9,
                left: null,
                right: null
            }
        },
        right: {
            val: 5,
            left: {
                val: 10,
                left: null,
                right: null
            },
            right: {
                val: 11,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: {
                val: 12,
                left: null,
                right: null
            },
            right: {
                val: 13,
                left: null,
                right: null
            }
        },
        right: {
            val: 7,
            left: {
                val: 14,
                left: null,
                right: null
            },
            right: {
                val: 15,
                left: null,
                right: null
            }
        }
    }
}
console.log(inorderTraversal(root));
// @lc code=end

