const pushDominoes = (dominoes_) => {
  let que = [];
  let n = dominoes_.length;
let dominoes = dominoes_.split("")
  for (let i = 0; i < n; i++) {
    if (dominoes[i] === "R" || dominoes[i] === "L") {
      que.push({ index: i, domino: dominoes[i] });
    }
  }

  while (que.length) {

        const {index,domino} = que.shift();
    
        if(domino === "L" && index > 0){
             dominoes[index -1] = "L"
             que.push({index: index - 1 ,domino: "L"})
        } else if (domino === "R" && index + 1 < n + 1){
            if(index + 2 < n + 1 && dominoes[index+2] === "L"){
                que.shift()
            } else {
                dominoes[index + 1] = "R"
                que.push({index: index + 1 ,domino: "R"})
            }
        }
  }
  console.log(dominoes.join(""))
};

let  dominoes = ".L.R...LR..L..";

pushDominoes(dominoes);
