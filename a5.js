
function binaryLeft(n, arr, k) {
    let lo = 0;
    let hi = n - 1;
    let res = - 1;
    
    
    while (lo <= hi) {
        
        let mid = Math.floor(lo + (hi - lo) / 2);

        if (arr[mid] === k)
        {
            res = mid;
            hi = mid - 1;
        }
        else if (arr[mid] < k)
            { lo = mid+1 }
        else { hi = mid - 1;}
        
    }
    return res;
}
//--------------


function binaryRight(n, arr, k) {
    let lo = 0;
    let hi = n - 1;
    let res = - 1;


    while (lo <= hi) {

        let mid = Math.floor(lo + (hi - lo) / 2);

        if (arr[mid] === k) {
            res = mid;
            lo = mid + 1;
        }
        else if (arr[mid] < k) { lo = mid + 1 }
        else { hi = mid - 1; }

    }
    return res;
}




function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let k = +input[2];

   // console.log(n,arr,k)
    
     let left = binaryLeft(n, arr, k);
     let right = binaryRight(n, arr, k);

    if (left == -1) {
        console.log(left, right, 0)
        return;
    }
    
    else {
        let ans = right - left + 1;
        console.log(left,right,ans)
    }

   
  }
  if (process.env.USERNAME === "Cvam's Singhh") {
      runProgram(`6
1 1 1 2 2 2	
1`);
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


