
function findmin(n, arr) {
  let lo = 0;
  let hi = n - 1; 
  
  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (arr[mid] > arr[mid + 1]) { return mid + 1 }
    else if (arr[mid] < arr[mid - 1]) { return mid }
    else if (arr[mid] < arr[hi]) { hi = mid - 1 }
    else ( lo = mid+1)
  }

  return -1;
}


function solve(arr,lo, hi,k) {     

    while (lo <= hi) {

        let mid = Math.floor(lo + (hi - lo) / 2);

      if (arr[mid] === k) { return mid}
      else if (arr[mid] > k) { hi = mid - 1 }
      else {lo = mid+1}
     
    }
  return -1;
 }

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
   
  let minIndex = findmin(n, arr)
 // console.log(minIndex);
  
  let lo = 0;
  let hi = n - 1;

  if (k > arr[hi])
  { console.log(solve(arr, lo, minIndex, k)) }
  else { console.log(solve(arr,minIndex,hi,k))} 
   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`5 6
3 4 5 6 1`);
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
      process.exit(0) ;
    });
  }
