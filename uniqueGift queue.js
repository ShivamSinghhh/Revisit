
function solve(str) {

    let queue = [];
    let data = {};
    let nstr = "";

    for (let i = 0; i < str.length; i++){

        queue.push(str[i]);
        if (data[str[i]] === undefined)
        {
            data[str[i]] = 1;
        }
        else { data[str[i]]++ }
        

        while (data[queue[0]] > 1) {
            queue.shift();
        }

        if (queue.length > 0)         
        {
            nstr += "" + queue[0]
        }
        else
        {
            nstr += "" + "#"
        }     
            
    }

   console.log(nstr)

    
}


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;

    for (let i = 0; i < test; i++) {
        let str = input[line++].trim();
        // console.log(str);
        solve(str)

    }

}
if (process.env.USERNAME === "Cvam's Singhh") {
    runProgram(`2
abadbc
abcabc`);
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
