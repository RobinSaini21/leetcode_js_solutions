const carFleet = (target, positions, speeds) => {
  const cordinates = getCordinates(target, positions, speeds);
  const stack = [];
  for (const cordinate of cordinates) {
    shrink(stack, cordinate);
    stack.push(cordinate);
  }
  console.log(stack);
};

const getCordinates = (target, positions, speeds) =>
  positions
    .map((position, index) => [position, speeds[index]])
    .sort(([aPosition], [bPosition]) => aPosition - bPosition)
    .map(([_position, _speed]) => (target - _position) / _speed);

const shrink = (stack, current) => {
  const canReach = () => current < stack[stack.length - 1];
  while (stack.length && canReach()) stack.pop();
};

const target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

carFleet(target, position, speed);
