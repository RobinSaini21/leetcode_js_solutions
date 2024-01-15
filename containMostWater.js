//containMostWater.js

const maxWater = (heigths) => {
  let left = 0,
    right = heigths.length - 1;
  let max = Number.MIN_SAFE_INTEGER;
  while (left < right) {
    const [leftHeigth, rightHeigth] = [heigths[left], heigths[right]];
    const area = getArea(heigths, left, right);
    max = Math.max(max, area);
    if (leftHeigth <= rightHeigth) left++;
    if (rightHeigth < leftHeigth) right--;
  }
  console.log(max)
};

const getArea = (heigths, left, right) => {
  return Math.min(heigths[left], heigths[right]) * (right - left);
};

const height = [1,8,6,2,5,4,8,3,7];

maxWater(height)