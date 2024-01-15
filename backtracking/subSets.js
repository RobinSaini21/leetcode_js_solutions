const subSets = (nums) =>{
const res = [];
const n = nums.length;

const getSuperSet = (subRes = [],idx = 0) => {
  //  console.log(idx)
     res.push(subRes.slice())
    for (let i = idx; i < n; i++) {
        let element = nums[i]
        subRes.push(element)
       // console.log(idx + 1)
        getSuperSet(subRes,i + 1)
        subRes.pop()
    }
}

getSuperSet();
console.log(res)
}

subSets([1,2,3])