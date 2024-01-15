const findDisappearedNumbers = (nums) =>{
    const n = nums.length, set = new Set(),arr = [];
for (let i = 1; i <= n; i++) {
set.add(i)
    
}
set.forEach(element => {
 if(!nums.includes(element)){
arr.push(element)
 }
});
console.log(arr)
}

const nums = [4,3,2,7,8,2,3,1];
findDisappearedNumbers(nums)