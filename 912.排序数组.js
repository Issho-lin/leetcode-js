/*
 * @Author: linqibin
 * @Date: 2022-12-23 16:55:28
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 17:30:52
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // 普排
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] > nums[j]) {
    //             [nums[i], nums[j]] = [nums[j], nums[i]]
    //         }
    //     }
    // }
    // return nums
    // 冒泡：相邻两两比较放到最后
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = 0; j < nums.length - 1 - i; j++) {
    //         if (nums[j] > nums[j + 1]) {
    //             [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
    //         }
    //     }
    // }
    // return nums
    // 选择排序：每一轮从未排列序列中找到最小的，与未排列序列的队首交换
    // for (let i = 0; i < nums.length - 1; i++) {
    //     let minIdx = i
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[j] < nums[minIdx]) {
    //             minIdx = j
    //         }
    //     }
    //     [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]]
    // }
    // return nums
    // 插入排序：扫描左边的序列，找到对应插入的位置
    // for (let i = 1; i < nums.length; i++) {
    //     const temp = nums[i]
    //     let j = i - 1
    //     while (j >= 0) {
    //         if (temp >= nums[j]) {
    //             break
    //         }
    //         nums[j + 1] = nums[j]
    //         j--
    //     }
    //     nums[j + 1] = temp
    // }
    // return nums
    // 希尔排序：增量分组，对每组进行插入排序
    // for (let step = nums.length / 2 >> 0; step > 0; step = step / 2 >> 0) {
    //     for (let i = step; i < nums.length; i++) {
    //         const temp = nums[i]
    //         let j = i - step
    //         while (j >= 0) {
    //             if (temp >= nums[j]) {
    //                 break
    //             }
    //             nums[j + step] = nums[j]
    //             j -= step
    //         }
    //         nums[j + step] = temp
    //     }
    // }
    // return nums
    // 快速排序：基准值左右分配，递归合并
    // if (nums.length < 2) {
    //     return nums
    // }
    // const left = [], right = [], pivot = nums[0]
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] < pivot) {
    //         left.push(nums[i])
    //     } else {
    //         right.push(nums[i])
    //     }
    // }
    // return sortArray(left).concat(pivot, sortArray(right))
    // 归并排序：先切成左右两个片段，排序后再合并
    const len = nums.length
    if (len < 2) {
        return nums
    }
    const mid = len / 2 >> 0
    const left = nums.slice(0, mid)
    const right = nums.slice(mid, len)
    return merge(sortArray(left), sortArray(right))
};
// 归并
function merge(left, right) {
    const res = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }
    return res.concat(left, right)
}
// @lc code=end

