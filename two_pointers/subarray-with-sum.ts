/* 
  Let’s check whether a sequence a0, a1, . . . , an−1 contains a contiguous subsequence whose sum of elements equals s
*/ 

const CaterPillar = (arr: number[], sum:number): boolean => {
    let n = arr.length;
    let front = 0, total = 0;
    for (let i = 0; i < n ; i++) {
        while (front < n && total + arr[front] <= sum) {
            total += arr[front]
            front += 1
        }
        if (total === sum) return true;
        total -= arr[i]
    }
    return false;
}
let arr = [6, 2, 7, 4, 1, 3, 6]
console.log(CaterPillar(arr, 12))
