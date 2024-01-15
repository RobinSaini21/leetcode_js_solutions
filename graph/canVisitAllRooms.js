const canVisitAllRooms = (rooms = []) => {
  let seen = [0];
  let bfs = [0];

  while (bfs.length) {
    const i = bfs.shift();

    for (const room of rooms[i]) {
        if(!seen.includes(room)){
            bfs.push(room);
            seen.push(room);
            if(seen.length === rooms.length) return true;
        }
    }
  }
  return seen.length === rooms.length;
};
const rooms = [[1],[2],[3],[]];
const rooms2 = [[1,3],[3,0,1],[2],[0]]
console.log(canVisitAllRooms(rooms));
console.log(canVisitAllRooms(rooms2));