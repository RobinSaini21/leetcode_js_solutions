const bestTeamScore = function (scores = [], ages = []) {
  let n = scores.length;
  let dp = new Array(n + 1).fill(0);
  let groups = [];
  for (let i = 0; i < n; i++) {
    groups.push({
      age: ages[i],
      score: scores[i],
    });
  }

  groups.sort((a,b)  => a.age - b.age)
  dp[0] = groups[0].score
 for (let i = 1; i < n; i++) {
    dp[i] = groups[i].score;
    for (let j = 0; j < i; j++) {
        if(groups[j].score <= groups[i].score){
            dp[i] = Math.max(dp[i],dp[j] + groups[i].score)
        }
      
    }
    

 }
 console.log(dp)
};

const  scores = [4,5,6,5], ages = [2,1,2,1];
// const scores = [1, 2, 3, 5],
  // ages = [8, 9, 10, 1];
bestTeamScore(scores, ages);
