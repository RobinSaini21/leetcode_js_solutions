const topKFrequentElement = (nums, k) => {
  const frequency = getFrequency(nums);
  const bucket = intoBucket(frequency, nums.length);

  return getKelements(bucket, k);
};

const getFrequency = (nums) => {
  const map = {};
  for (const num of nums) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }
  return map;
};
const intoBucket = (frequency, length) => {
  const bucket = genretaBucket(length);

  for (const [key, value] of Object.entries(frequency)) {
    bucket[value].push(Number(key));
  }
  return bucket;
};

const genretaBucket = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push([]);
  }

  return arr;
};

const getKelements = (buckets, k) => {
  const res = [];
  for (let i = buckets.length - 1; i > 0; i--) {
    if (buckets[i].length > 0 && res.length < k) {
      res.push(...buckets[i]);
    }
    if (res.length  === k) {
      return res;
    }
  }
 // return res
};

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
console.log(topKFrequentElement(nums, k));
