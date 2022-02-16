//---- Brute---force---------------------------//
function countSuchPair(n,arr,k){
    let count = 0 ;
    for (let i = 0 ; i < n-1;i++){
       
        for (let j = i+1 ;  j < n ;j++){
            
            if (arr[i] + arr[j] === k) { count++}

        }
    }
    console.log(count)
}

//----two pointer can only be applied if elements are distinct-------//


// function countSuchPair(n,arr,k){
//    arr = arr.sort((a,b)=>a-b)
//     let count = 0 ;
//     let lo = 0 ; 
//     let hi = n-1;
//     while(lo < hi){
//         if (arr[lo]+arr[hi] === k)   
//         { 
//             count++;            
//             hi--;
//         }
//         else if(arr[lo] + arr[hi] > k)
//         { hi --;}
//         else { lo++;}
//     }
    
//     console.log(count)
// }


//-------Object-method---can not be applied here for count---------//

// function countSuchPair(n,arr,k){
//     let data = {};
//     let count = 0 ;
//     for (let i = 0 ; i < n; i++){
//         let keyvalue = k-arr[i];
//         if (data[keyvalue] !== undefined)
//           { count++}

//     data[arr[i]] === undefined ?  data[arr[i]]=1 : data[arr[i]]++

//     }
//     console.log(count)
// }
//------------------------------------------------//

function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let [n,k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);  

    countSuchPair(n,arr,k)
}

if (process.env.USERNAME === "Cvam's Singhh") {
  runProgram(`5 0
  -1 1 -1 1 -1`);
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
