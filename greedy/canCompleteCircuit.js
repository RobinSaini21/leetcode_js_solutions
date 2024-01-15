const canCompleteCircuit = (gas = [], cost = []) => {
  let [totalTank, currentTank, startingStation, n] = [0, 0, 0, gas.length];

  for (let i = 0; i < n; i++) {
    totalTank += gas[i] - cost[i];
    currentTank += gas[i] - cost[i];

    const isEmpth = currentTank < 0

    if(isEmpth){
        startingStation++
        currentTank = 0
    }
    
  }
  console.log(startingStation)
};

const gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
  canCompleteCircuit(gas,cost)
