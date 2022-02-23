function checkIfSortedAndRotated(n,arr){
    // checking for minimum value index
    let lo = 0 ;
    let hi = n-1;
    let minValue = 1/0;
    let minIndex = -1;
    while(lo <= hi){
        let mid = Math.floor(lo+(hi-lo)/2);
        if(arr[mid] <= arr[hi])
        {
           hi = mid-1
        }
        else 
        { lo = mid+1}
    //--check for each mid whether it is minimum or not---//
    if (arr[mid] <= minValue)
    {
        minValue = arr[mid];
        minIndex = mid;
    }
  } 
  //-----after while loop return minIndex-----------//
    // console.log(minIndex,minValue)
    if (minIndex === 0)
    { console.log("NO")}
    else {
       if(checkSorted(arr,0,minIndex-1) && checkSorted(arr,minIndex,n-1))
       { console.log("YES")}
       else {console.log("NO")}
    }
}

//-------function for checking Array isSorted or not-------------//
function checkSorted(arr,lo,hi){
    let min = arr[lo]
    for (let i = lo ; i < hi; i++){
        if (arr[i] > arr[i+1])
           {return false}
    }
    return true;
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   // console.log(n,arr)
    checkIfSortedAndRotated(n,arr)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`30
  3 6 7 8 9 10 11 13 14 15 16 17 20 22 23 24 25 26 27 28 -9 -8 -7 -6 -5 -4 -3 -1 1 2`);
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
