
let arr = [12,3,4,6,1,9];
let sum = 0 ;

find(arr,sum)
function find(arr,sum){
    arr = arr.sort((a,b)=>a-b);
    for (let i = 0  ;i < arr.length-2; i++){
        let lo = i+1 ;
        let hi = arr.length-1;
        while (lo < hi){
            if (arr[i]+arr[lo]+arr[hi] === sum)
            { console.log(arr[i],arr[lo],arr[hi]); return}

           else if (arr[i]+arr[lo]+arr[hi] > sum) { hi --}
           else {lo++}
        }
    }
    console.log("No Triplet")

}

