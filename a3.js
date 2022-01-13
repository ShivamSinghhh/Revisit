let arr = [3,3]

let target = 6;

console.log(solve(arr, target));

function solve(arr, target) {
    let data = {};

    for (let i = 0; i < arr.length; i++) {

        data[arr[i]] = 1;
    
    }

    console.log(data)

    for (let j = 0; j < arr.length; j++) {
    
        let n = target - arr[j];

        if (data[n] == 1) { return true; }
    

    }

    return false;
}