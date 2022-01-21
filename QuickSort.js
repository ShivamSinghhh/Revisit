

let arr = [-10, 5, 4, -2, 0, -4, -7,-9,-5];

// arr = arr.sort((a, b) => a - b);

//-------------------------------
let lo = 0;
let hi = arr.length - 1;

function quickSort(arr,lo,hi) {
    
    if (lo < hi) {        
        let index = partition(arr, lo, hi);
        quickSort(arr, lo, index - 1);
        quickSort(arr,index + 1,hi)
    }
    else { return}
}
//---------------------------------

function partition(arr, lo, hi) {
    
    let pivot = hi;
    let i = -1;
    let j = 0;

    while (j < hi) {
        if (arr[j] > arr[pivot]) { j++ }
        else {
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]]   // swap i & j
        }
    }

    // swap i with pivot;
    [arr[i+1], arr[pivot]] = [arr[pivot], arr[i+1]];
    
    return i+1;

    
}

quickSort(arr,lo,hi)
console.log("arr =",arr)

// function findIndex(arr) {
//     let lo = 0;
//     let hi = arr.length - 1;
//     let index = -1;

//     while (lo <= hi) {
//         let mid = Math.floor(lo + (hi - lo) / 2);

//         if (arr[mid] >= 0) { hi = mid - 1 }
//         else {
//             lo = mid + 1;
//             index = mid;
//         }
//     }
//     console.log(index+1);
// }