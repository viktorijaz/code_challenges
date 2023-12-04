/*
    The problem: a robber has to maximize the amount of money he can rob
    given that he can not rob two consecutive houses
    arr is the array with the amount of money in each house
    
    Corectness proof:
    Let  
    - rob1 be the maximum amount that has been robed at i-2 position
    - rob2 be the maximum amount that can been robed at i-1 position

    amount1, amount2, .... rob1, rob2, amounti, ... amountn.

    Then the maximum amount that can be robbed at amount i is max(amounti + rob1, rob2)
*/

const houseRobber = (arr: number[]): number => {
    let rob1 = 0, rob2 = 0;
    for(let i = 0; i< arr.length; i++) {
        let temp = Math.max(rob2, arr[i]+rob1);
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}
const arr = [1,2,3,1,2]
console.log(houseRobber(arr))
