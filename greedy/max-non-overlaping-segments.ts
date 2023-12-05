
/*
  Codility MaxNonOverlappingSegments solution
  Why is this a greedy algorithms
  Proof of correctness: 
  The segments are sorted by their end points
  Then if there are K number of segments that are overlapping then we can discard them all
  and keep only the first one of these segments before we add the next "free" segment
  If we wanted to go the opposite way and insted choose the second segment of these K segments
  then it might overlap with the next "free" segment, in which case it is not the optimal solution
*/


const maxNonOverlappingSegments = (arrA: number[], arrB: number[]): number => {
    if(arrA.length <2 ) return arrA.length;
    let cnt = 1;
    let end = arrB[0];
    for (let index = 1; index < arrA.length; index++) {
        if (arrA[index] > end){
            cnt += 1
        end = arrB[index]
        }
    }
    return cnt;
}




let arr1 = [1,3,7,9,9]
let arr2 = [5,6,8,9,10]

console.log(maxNonOverlappingSegments(arr1, arr2))
