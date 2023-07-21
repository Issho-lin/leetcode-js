/*
 * @Author: linqibin
 * @Date: 2022-12-23 14:28:22
 * @LastEditors: linqibin
 * @LastEditTime: 2022-12-23 16:55:09
 * @Description: 
 * 
 * Copyright (c) 2022 by 智慧空间研究院/金地空间科技, All Rights Reserved. 
 */
/*
 * @lc app=leetcode.cn id=2418 lang=javascript
 *
 * [2418] 按身高排序
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for (let i = 0; i < names.length; i++) {
        names[i] = [names[i], heights[i]]
    }
    // names.sort((a, b) => b[1] - a[1])
    // for (let i = 0; i < names.length; i++) {
    //     names[i] = names[i][0]
    // }
    // return names
    // 冒泡排序：相邻两两比较放到最后
    // for (let i = 0; i < names.length - 1; i++) {
    //     for (let j = 0; j < names.length - 1 - i; j++) {
    //         if (names[j][1] < names[j + 1][1]) {
    //             [names[j], names[j + 1]] = [names[j + 1], names[j]]
    //         }
    //     }
    // }
    // 选择排序：每一轮从未排列序列中找到最大的，与未排列序列的队首交换
    // for (let i = 0; i < names.length - 1; i++) {
    //     let maxIdx = i
    //     for (let j = i + 1; j < names.length; j++) {
    //         if (names[maxIdx][1] < names[j][1]) {
    //             maxIdx = j
    //         }
    //     }
    //     [names[maxIdx], names[i]] = [names[i], names[maxIdx]]
    // }
    // 插入排序：扫描左边的序列，找到对应插入的位置
    // for (let i = 1; i < names.length; i++) {
    //     const temp = names[i]
    //     let j = i - 1
    //     while (j >= 0) {
    //         if (temp[1] <= names[j][1]) {
    //             break
    //         }
    //         // 往后移一位
    //         names[j + 1] = names[j]
    //         j--
    //     }
    //     names[j + 1] = temp
    // }
    // 希尔排序：增量分组，每组进行插入排序
    // for (let step = names.length / 2 >> 0; step > 0; step = step / 2 >> 0) {
    //     for (let i = step; i < names.length; i++) {
    //         const temp = names[i]
    //         let j = i - step
    //         while (j >= 0) {
    //             if (temp[1] <= names[j][1]) {
    //                 break
    //             }
    //             // 分组里往后一位，相当于往后移动一个增量step
    //             names[j + step] = names[j]
    //             j -= step
    //         }
    //         names[j + step] = temp
    //     }
    // }
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i][0]
    }
    return names
};
// @lc code=end

