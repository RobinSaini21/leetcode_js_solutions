
const totalFruit = (fruits = []) => {
  let right ,left = 0,n = fruits.length;
  let map = new Map;
  for (right = 0; right < n; right++) {
     map.set(fruits[right] , map.has(fruits[right]) ? map.get(fruits[right]) + 1 : 1);
     while (map.size > 2) {
        map.set(fruits[left] ,map.get(fruits[left]) - 1);
         if(map.get(fruits[left]) === 0) map.delete(fruits[left])
        left++
     }
     
  }
  console.log(right - left)
}

const fruits = [1,2,3,2,2];
totalFruit(fruits)