function oppositeOfQuickSort(arr,lo,hi){
    if (lo < hi) {

        let index = getPivotIndex(arr, lo, hi);
        oppositeOfQuickSort(arr, lo, index - 1);
        oppositeOfQuickSort(arr, index + 1, hi)
    }
    else {return}
  
}


//------------Set Pivot to appropriate position in array-------//

function getPivotIndex(arr,lo,hi){
    
    let pivot = arr[lo];
    let i = lo;
    let j = hi;

    while (i < j) {
        while (arr[i] >= pivot ) { i++ }
        while (arr[j] <= pivot) { j-- }

        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
        
    }

    [arr[lo], arr[j]] = [arr[j], arr[lo]];   

    return j; // element at this position got its exact position.
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    console.log(n,arr);
    oppositeOfQuickSort(arr,0,n-1);
    console.log(arr.join(" "))
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5
  2 3 1 4 5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
