/***
 Problem 4: Best Time to Buy and Sell Stock
 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 Difficulty: Easy

 PROBLEM STATEMENT:
 You are given an array `prices` where `prices[i]` is the price of a given
 stock on the i-th day.
 You want to maximize your profit by choosing a single day to buy one stock
 and choosing a different day in the future to sell that stock.
 Return the maximum profit you can achieve from this transaction.
 If you cannot achieve any profit, return 0.

 EXAMPLES:
   Input:  prices = [7, 1, 5, 3, 6, 4]
   Output: 5
   Reason: Buy on day 2 (price=1), sell on day 5 (price=6), profit = 6-1 = 5

   Input:  prices = [7, 6, 4, 3, 1]
   Output: 0
   Reason: Prices only decrease, no profitable transaction possible

 CONSTRAINTS:
   1 <= prices.length <= 10^5
   0 <= prices[i] <= 10^4
***/

function maxProfit(prices: number[]): number {
  // let max = 0;

  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     max = Math.max(max, prices[j] - prices[i]);
  //   }
  // }
  // return max;

  /*
   * Use two pointers: left = buy day, right = sell day.
   * At each step, compute profit = prices[right] - prices[left] and track the max.
   * If profit > 0: valid transaction, advance right to look for a better sell price.
   * If profit <= 0: prices[right] is a new minimum, so set left = right (anchor the
   *   new min as the buy day), then advance right.
   * Key insight: use left = right, not left++, because right is the actual new minimum —
   *   incrementing left by one could skip it and miss the best buy price.
   */
  let maxProfit = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    maxProfit = Math.max(maxProfit, profit);

    if (profit > 0) {
      right++;
    } else {
      left = right;
      right++;
    }
  }
  return maxProfit;
}

const inputs: number[][] = [
  [7, 1, 5, 3, 6, 4], // 5
  [7, 6, 4, 3, 1], // 0
  [1, 2], // 1
  [2, 1, 4], // 3
  [1], // 0 (single element, can't sell)
  [3, 5, 1, 4], // 3
];

for (const prices of inputs) {
  console.log(`maxProfit([${prices}]) →`, maxProfit(prices));
}
