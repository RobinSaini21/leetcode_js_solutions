const asteroidCollision = (asteroids) => {
  let stack = [];

  for (let asteroid of asteroids) {
    while (stack.length > 0 && asteroid < 0 && stack.at(-1) > 0) {
    const collision = asteroid + stack.at(-1);

    if(collision < 0){
      stack.pop();
    } else if(collision > 0){
      asteroid = 0
    } else {
      asteroid = 0;
      stack.pop()
    }
    }
    if (asteroid) {
      stack.push(asteroid);
    }
  }
  console.log(stack);
};

const asteroids = [5,10,-5];

asteroidCollision(asteroids)
