const largestNumber = (nums) =>{
let n = nums.length, max = Number.MIN_SAFE_INTEGER,arr = [];
for (let i = 0; i < n; i++) {
    arr.push(`${nums[i]}`)
    
}

arr.sort((a,b) => {
    let d = a + b , c  = b + a

    return parseInt(d) > parseInt(c) ? -1 : 1
})
console.log(arr.join(""))
}

const nums = [3,30,34,5,9];

largestNumber(nums)

