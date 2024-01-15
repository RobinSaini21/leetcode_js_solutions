const minSwaps = (s) => {
  let max = 0,
    extraClosing = 0;

  for (const b of s) {
   b === "]" ? extraClosing++ : extraClosing--;
   max = Math.max(extraClosing,max)
  }
  console.log(Math.ceil(max / 2));
};

const s = "]]][[[";
minSwaps(s);
