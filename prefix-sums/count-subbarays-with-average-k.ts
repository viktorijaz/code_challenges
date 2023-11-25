// count of subarrays with average k
// Let there be a subarray [L, R] whose average is equal to K, then
// K = average[L, R] = sum[0, R] – sum[0, L-1] / (R – L + 1)
// Finding contiguous sums that equal zero can be done by examining prefix sums
/*
let's say dp store prefix sums.
if i<j
(dp[j]-dp[i])/(j-i)=k;
(dp[j]-dp[i]) = k * j - k* i
dp[j]-j*k=dp[i]-i*k;
So number of subarrays ending at j with their mean equal to k is the number of indexes who have dp[index]-index*k value equal to dp[j]-j*k.
*/

const  fillPrefixSum = (arr:number[]) :number[] =>  { 
    let prefixSum: number[] = new Array();
    prefixSum[0] = arr[0]; 
    for (let i = 1; i < arr.length; ++i) 
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    return prefixSum;
} 

const countKAverageSubarrays = (arr: number[], K:number): number => {
    let prefixSum = fillPrefixSum(arr);
    let zeroPrefixSum = prefixSum[prefixSum.length -1]-(prefixSum.length-1)*K;
    let count = 0;
     for (let i = 0; i < prefixSum.length; ++i) {
        if(prefixSum[i] - i*K === zeroPrefixSum) count++;
     }
    return count;
}
let K = 2;
let arr = [2,1,3,]

countKAverageSubarrays(arr, K)
