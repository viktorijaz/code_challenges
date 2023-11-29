

const fibSequence = (N: number):number[] => {
    let fib: number[] = [];
    fib.push(0,1);
    let i = 2;
    while(true){
        let next = fib[i - 1] + fib[i - 2];
        if(next>N) break;
        fib.push(next);
        i++;
    } 
    return fib;
}

const solution = (arr: number[]):number => {
    arr.push(1)  // for the final position
    let fib_set = fibSequence(arr.length);
    let optimalJumCountToIndex = new Array(arr.length).fill(-1);

    fib_set.forEach(jump => {
        if(arr[jump-1] == 1) {
            optimalJumCountToIndex[jump-1] = 1
        }
    });

    for (let idx = 0; idx < arr.length; idx++) {
        if(arr[idx] === 0 || optimalJumCountToIndex[idx] > 0) {
            continue;
        }
        let min_idx = -1
        let min_value = 100000
        fib_set.forEach(jump => {
            let previous_idx = idx - jump;
            if (previous_idx < 0) return;
            if (optimalJumCountToIndex[previous_idx] > 0 && min_value > optimalJumCountToIndex[previous_idx]) {

            min_value = optimalJumCountToIndex[previous_idx]
            min_idx = previous_idx
            }
        });
        if (min_idx != -1)
            optimalJumCountToIndex[idx] = min_value +1
    }
   
    return optimalJumCountToIndex[arr.length-1]
}

console.log(solution([0,0,0,1,1,0,1,0,0,0,0]))
