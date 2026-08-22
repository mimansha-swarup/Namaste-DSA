/*
Problem Statement:
You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Examples:
Example 1:
Input:prices = [7, 3, 1, 5, 6, 4]

Output:5
*/ 

const stockBuyNsell = (prices) =>{
    let lowestPrice = prices[0];
    let maxProfit = 0;

    for(let i =1; i<prices.length; i++){
        if(lowestPrice> prices[i]){
            lowestPrice=prices[i]
        }
        const profit = prices[i]-lowestPrice
        if(maxProfit<profit){
            maxProfit = profit
        }
        
    }

    return maxProfit
    
}

console.log(stockBuyNsell([7, 3, 1, 5, 6, 4]))