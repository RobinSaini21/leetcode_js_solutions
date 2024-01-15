const maxNumberOfBalloons = (text) => {
  let start = 0,totalBalloons = 0;
  for (let i = 0; i < text.length; i++) {
    if (isBalloon(start, i,text)) {
      start = i + 1;
      totalBalloons++;
    }
  }
  console.log(totalBalloons)
};

const isBalloon = (start, end,text) => {
  let balloonMap = {
    b: 1,
    a: 1,
    l: 2,
    o: 2,
    n: 1,
  };

  for (let i = start; i <= end; i++) {
   if(text[i] in balloonMap) balloonMap[text[i]] -= 1
   if(balloonMap[text[i]] === 0) delete balloonMap[text[i]];
  }
 return Object.keys(balloonMap).length === 0
};

const text = "loonbalxballpoon";
maxNumberOfBalloons(text);
