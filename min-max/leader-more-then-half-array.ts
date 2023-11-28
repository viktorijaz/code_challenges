/*
    Leader of a sequence with length n: an element that appears more then n/2 times.
    Efficient algorithm:
    Idea: If the sequence a0, a1, . . . , an−1 contains a leader, then after removing a pair of
    elements of different values, the remaining sequence still has the same leader. 
    Proof: If we remove two different elements then only one (one or zero) of them could be the leader. The leader in the
    new sequence occurs more than n/2 − 1 = (n−2)/2 times. Consequently, it is still the leader of the new sequence of n − 2 elements.
*/

const leaderHalfArray = (arr: number[]):number =>{
   
    const n = arr.length;
    let size = 0;
    let value = 0;
    for(let i:number = 0; i < n; i++) {
        if(size === 0) {
            size+=1;
            value = arr[i];
            continue;
        }
        if(value!==arr[i]){
            size-=1;
            continue;
        }
        size+=1;  
    }

    /* 
    value is only candidate, check if it really satisfies the condition that it appears more then n/2 times
    */
   
    let candidate = -1;
    let count = 0;
    for(let i:number = 0; i < n; i++) {
        if(arr[i]===value){
            count++
        }
        if(count>n/2){
            candidate = value;
            break
        }
    }
    return candidate;
   
}

let array = [6,8,8,8,6,6,5,8,8,8,8,6,3]
console.log(leaderHalfArray(array))
