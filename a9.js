let arr = [1,1,0,1,0,0,0,1]
let lo = 0;
let hi = arr.length-1 ;
while (lo < hi){
    if (arr[lo] === 0) { lo++}
    else if (arr[hi] === 1) { hi--}
    else{
        [arr[lo],arr[hi]] = [arr[hi],arr[lo]];
        lo++;
        hi--;
    }
}

console.log(arr)