const knapSack = (vals,wts,bag) =>{
    const n = vals.length;
    let tabu = genretaBucket(n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= bag; j++) {
             
            if(j < wts[i] && i === 0){
                tabu[i][j] = 0;
            }
           if(j >= wts[i] && i === 0){
            tabu[i][j] = vals[i]
           }
            if(j < wts[i] && i > 0){
                tabu[i][j] = tabu[i-1][j]
            }

            if(j >= wts[i] && i > 0){
                
                    tabu[i][j] = Math.max(val[i] + tabu[i - 1][j - wts[i]],tabu[i-1][j])
                
            }
           
            
        }
        
    }

    console.log(tabu)
}

const genretaBucket = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push([]);
    }
  
    return arr;
  };
  

const val = [1,4,5,7], wts= [1,3,4,5] , bag = 7;

knapSack(val,wts,bag)