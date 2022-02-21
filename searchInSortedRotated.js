

function searchInSortedRotated(n,arr,k){

     let minIndex = findMinIndex(n,arr,k)

     if (k === arr[minIndex]) {return minIndex}
     else if (k > arr[0] )  { return binarySearch(0,minIndex,arr,k)}
     else { return binarySearch(minIndex,n-1,arr,k)}
     
}
//---------finding elements with binary search--------//

function binarySearch(lo,hi,arr,k){    
  while (lo <= hi){
     let mid = Math.floor(lo+(hi-lo)/2);
     if (arr[mid] === k)  { return mid;}
     else if (arr[mid] > k) { hi = mid-1}
     else { lo = mid+1}
  }
  return -1;
}


//------------finding min Index-------// 
function findMinIndex(n,arr,k){
    let minIndex ;
    let min = +1/0;
    let lo = 0 ;
    let hi = n-1 ;
    while (lo <= hi){
        let mid = Math.floor(lo +(hi-lo)/2);
        if (arr[mid] <= arr[hi]){      
            hi = mid-1
        }
        else {
            lo = mid+1;
        }
     if(arr[mid] <= min){
         min = arr[mid];
         minIndex = mid;
     }
}
   return minIndex;
}


function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    let ans = searchInSortedRotated(n,arr,k)
    console.log(ans)

}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5 6
  5 6 7 8 4`);
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
