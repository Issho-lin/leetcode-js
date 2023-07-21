/*
 * @Author: linqibin
 * @Date: 2022-10-18 10:12:15
 * @LastEditors: linqibin
 * @LastEditTime: 2022-10-18 10:31:12
 * @Description: 
 * 
 * Copyright (c) 2022 by 研发中心/金地楼宇, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
    const ans = []
    preorder(root, ans)
    return ans
};
var preorder = function(root, ans) {
    if (!root) {
        return
    }
    ans.push(root.val)
    preorder(root.left, ans)
    preorder(root.right, ans)
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
console.log(preorderTraversal(root));
// @lc code=end

