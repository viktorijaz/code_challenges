/*
Greatest common divisor
*/
const euclidean = (a:number, b: number):number => {
    if (a === b) return a;
    if(a>b){
        return euclidean(a-b, b);
    }
    else {
        return euclidean(a,b-a);
    }
}

console.log(euclidean(12,18))
