let arr = ["88 99 100", "32 99 200", "12 99 100", "12 12 100"];

let data = {}

for (let i = 0; i < arr.length; i++) {
    let [user1,user2,amount] = arr[i].trim().split(" ").map(Number);

    if (user1 !== user2)  // checking whether same user transactions or not
    {         
        data[user1] === undefined ?   data[user1] = 1 : data[user1]++ ;
        data[user2] === undefined ?   data[user2] = 1 : data[user2]++ ;
    }
    else {
        data[user1] === undefined ?   data[user1] = 1 : data[user1]++ ;
    }
  
}

console.log(data);
let ans = [];

//--------- checking threesold users---------//
function checkThreesold(num){
   for (key in data){
       if (data[key] >= num)
       { ans.push(+key)}
   }
}
 checkThreesold(2)

console.log(ans.join(" "))