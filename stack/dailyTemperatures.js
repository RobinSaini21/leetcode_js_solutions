const dailyTemperatures = (temp) => {
  const n = temp.length;
  const res = new Array(n).fill(0);
  const stack = [];
  for (let day = 0; day < n; day++) {
    while(canShrink(temp,day,stack)){
      const perviousDay = stack.pop();
      const tempDiff = day - perviousDay;
      
      res[perviousDay] = tempDiff

    }
    stack.push(day);
  }
console.log(res)
};

const canShrink = (temp, day, stack) => {
  const [currentDay,perviousDay] = [temp[day],temp[stack[stack.length - 1]]];
  console.log(currentDay,perviousDay)

 return stack.length && currentDay > perviousDay;
};

dailyTemperatures([73,74,75,71,69,72,76,73])