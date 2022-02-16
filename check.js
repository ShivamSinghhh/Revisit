
let arr = [3,2,1,0,4,10,-2];
let ans = {};
for (let i = 0; i < arr.length; i++){
  if (ans[arr[i]] === undefined){
    ans[arr[i]] = 1 ;
  }
  else 
    ans[arr[i]]++;
  
}
// console.log(ans)
// ans.sort((a,b)=>a.val-b.val);
console.log(ans);
