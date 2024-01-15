const maxUncrossedLines = (nums1 = [] , nums2 = []) => {
const n1 = nums1.length;
const n2 = nums2.length;
let map = [];
let res = 0;

for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
        if(nums1[i] === nums2[j]){
            if(!map.includes(nums1[i])){
              res++;
              map.push(nums1[i])
            }
        }
        
    }
}
console.log(res)
}

const nums1 = [1,3,7,1,7,5], nums2 = [1,9,2,5,1];
maxUncrossedLines(nums1,nums2)