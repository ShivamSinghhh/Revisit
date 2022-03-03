//----------generating subsets of the given array----------//
function kEvenSubSet(n, arr, k, curr, count, max,possible, ans) {
    if (ans.length >= k) {
        if (kEvenElements(ans, k)) {
            count++;
            console.log("ans =", ans)
            if (max < count) 
            { 
                max = count ;
                console.log("max =", max)
            }
            possible.push([...ans])
        }
    }
    if (ans.length === n) { return }

    for (let i = curr; i < n; i++) {
        ans.push(arr[i]);
        kEvenSubSet(n, arr, k, i + 1, count, max,possible, ans);
        ans.pop()
    }

}


//-------checking k number of even elements-----------------// 

function kEvenElements(arr, k) {
    let evenNums = 0;
    arr.forEach(element => {
        if (element % 2 === 0) { evenNums++ }
    });

    if (evenNums >= k) { return true }
    else { return false }
}

// -------------------------------------------------------------//
function runProgram(input) {
    // write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
    for (let i = 0; i < test; i++) {
        let [n, k] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        console.log(n, arr, k);
        let count = 0;
        let max = -1/0;
        let possible = []
        kEvenSubSet(n, arr, k, 0, count, max,possible, []);
        console.log("Max from Input =",max);   
        console.log("possible =",possible)    

    }
}

if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`2
  4 2
  4 3 2 1
  2 1
  2 3`);
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
