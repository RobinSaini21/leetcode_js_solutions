const leastBricks = (walls) => {
  let width = 0;
  let max = Number.MIN_SAFE_INTEGER;
  const length = walls.length;

  const widthMap = new Map();
  for (const wall of walls[0]) {
    width += wall;
  }
  for (let i = 0; i < walls.length; i++) {
    const bricks = walls[i];
    let width = 0;

    for (const brick of bricks) {
      width += brick;
      widthMap.has(width)
        ? widthMap.set(width, widthMap.get(width) + 1)
        : widthMap.set(width, 1);
    }
  }
  widthMap.delete(width);

  for (const [key,value] of widthMap) {
    max = Math.max(max,value)
  }

console.log(length - max)
};

const walls = [
  [1, 2, 2, 1],
  [3, 1, 2],
  [1, 3, 2],
  [2, 4],
  [3, 1, 2],
  [1, 3, 1, 1],
];
leastBricks(walls);
