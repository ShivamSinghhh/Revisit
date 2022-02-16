
function greaterAndEqual(n, arr, k) {
    let count = 0;
    let lo = 0;
    let hi = n - 1;
    let index = -1;
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        
        if (arr[mid] >= k) {
            index = mid;
            hi = mid - 1;
        }
       
        else { lo = mid+1 ;}            
    
    }
   // console.log(index)
    if (index === -1) { return 0;}
    else { 
        count = n-index;
        return count;
    }
}

//--------------------------

function strictlyGreater(n,arr,k) {
    let count = 0;
    let lo = 0;
    let hi = n - 1;
    let index = -1;
    while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);
        if (arr[mid] > k) {
            index = mid;
            hi = mid - 1;
        }
       
        else {
            lo = mid+1;
        }       
    }

    if (index === -1) { return 0;}
    else { 
        count = n-index;
        return count;
    }
}

//--------------------
function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b)
    let q = +input[2];
    let line = 3;
    for (let i = 0; i < q; i++) {
        let [x, k] = input[line++].trim().split(" ").map(Number);
       // console.log(x, k)
        if(x===0) 
        {console.log(greaterAndEqual(n,arr,k))}
        else if (x ===1 )
        { console.log(strictlyGreater(n,arr,k))}
    }

}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`4
  1 2 3 4
  3
  0 5
  1 3
  0 3`);
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
