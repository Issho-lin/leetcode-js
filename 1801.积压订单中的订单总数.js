/*
 * @lc app=leetcode.cn id=1801 lang=javascript
 *
 * [1801] 积压订单中的订单总数
 */

// @lc code=start
/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function(orders) {
    let mod = 10 ** 9 + 7
    const sellHeap = new MinHeap() // 销售订单
    const buyHeap = new MaxHeap() // 采购订单
    for (let [price, amount, orderType] of orders) {
        if (orderType === 0) { // buy
            while (amount) {
                if (!sellHeap.size() || sellHeap.peak().price > price) {
                    buyHeap.offer({price, amount})
                    amount = 0
                } else if (sellHeap.peak().price <= price) {
                    const peakAmount = sellHeap.peak().amount
                    if (amount >= peakAmount) {
                        sellHeap.poll()
                        amount -= peakAmount
                    } else {
                        sellHeap.peak().amount -= amount
                        amount = 0
                    }
                }
            }
        } else if (orderType === 1) { // sell
            while (amount) {
                if (!buyHeap.size() || buyHeap.peak().price < price) {
                    sellHeap.offer({price, amount})
                    amount = 0
                } else if (buyHeap.peak().price >= price) {
                    const peakAmount = buyHeap.peak().amount
                    if (amount >= peakAmount) {
                        buyHeap.poll()
                        amount -= peakAmount
                    } else {
                        buyHeap.peak().amount -= amount
                        amount = 0
                    }
                }
            }
        }
    }
    return (sellHeap.count() + buyHeap.count()) % mod

};
class MinHeap {
    constructor(data = []) {
        this.data = data
        this.heapify()
    }
    size() {
        return this.data.length
    }
    count() {
        return this.data.reduce((a, b) => a + b.amount, 0)
    }
    heapify() {
        if (this.size() < 2) {
            return
        }
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }
    swap(i, j) {
        if (i === j) {
            return
        }
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    peak() {
        if (!this.size()) {
            return null
        }
        return this.data[0]
    }
    offer(val) {
        this.data.push(val)
        this.bubbleUp(this.size() - 1)
    }
    poll() {
        if (!this.size()) {
            return null
        }
        if (this.size() === 1) {
            return this.data.pop()
        }
        const res = this.data[0]
        this.data[0] = this.data.pop()
        this.bubbleDown(0)
        return res
    }
    price(index) {
        return this.data[index].price
    }
    bubbleUp(index) {
        while (index) {
            const parentIndex = (index - 1) >> 1
            if (this.price(parentIndex) > this.price(index)) {
                this.swap(parentIndex, index)
                index = parentIndex
            } else {
                break
            }
        }
    }
    bubbleDown(index) {
        const lastIndex = this.size() - 1
        while (index < lastIndex) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let findIndex = index
            if (leftIndex <= lastIndex && this.price(leftIndex) < this.price(findIndex)) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.price(rightIndex) < this.price(findIndex)) {
                findIndex = rightIndex
            }
            if (index !== findIndex) {
                this.swap(index, findIndex)
                index = findIndex
            } else {
                break
            }
        }
    }
}
class MaxHeap {
    constructor(data = []) {
        this.data = data
        this.heapify()
    }
    size() {
        return this.data.length
    }
    count() {
        return this.data.reduce((a, b) => a + b.amount, 0)
    }
    heapify() {
        if (this.size() < 2) {
            return
        }
        for (let i = 1; i < this.size(); i++) {
            this.bubbleUp(i)
        }
    }
    swap(i, j) {
        if (i === j) {
            return
        }
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    peak() {
        if (!this.size()) {
            return null
        }
        return this.data[0]
    }
    offer(val) {
        this.data.push(val)
        this.bubbleUp(this.size() - 1)
    }
    poll() {
        if (!this.size()) {
            return null
        }
        if (this.size() === 1) {
            return this.data.pop()
        }
        const res = this.data[0]
        this.data[0] = this.data.pop()
        this.bubbleDown(0)
        return res
    }
    price(index) {
        return this.data[index].price
    }
    bubbleUp(index) {
        while (index) {
            const parentIndex = (index - 1) >> 1
            if (this.price(parentIndex) < this.price(index)) {
                this.swap(parentIndex, index)
                index = parentIndex
            } else {
                break
            }
        }
    }
    bubbleDown(index) {
        const lastIndex = this.size() - 1
        while (index < lastIndex) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let findIndex = index
            if (leftIndex <= lastIndex && this.price(leftIndex) > this.price(findIndex)) {
                findIndex = leftIndex
            }
            if (rightIndex <= lastIndex && this.price(rightIndex) > this.price(findIndex)) {
                findIndex = rightIndex
            }
            if (index !== findIndex) {
                this.swap(index, findIndex)
                index = findIndex
            } else {
                break
            }
        }
    }
}
// @lc code=end

