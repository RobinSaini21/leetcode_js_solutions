const canFinish = (numCourses, prerequisites) => {
  let hashMap = {};
  for (let i = 0; i < numCourses; i++) {
    if (hashMap[prerequisites[i][0]]) {
      hashMap[prerequisites[i][0]].push(prerequisites[i][1]);
    } else {
      let arr = [];
      arr.push(prerequisites[i][1]);
      hashMap[prerequisites[i][0]] = arr;
    }
  }
console.log(takeCourse(hashMap,0))
 // return takeCourse(hashMap,0)
};

const takeCourse = (course, num,p = 0 ,set = new Set()) => {
    console.log(course[num],set,p)
    if(set.has(p)){
        return false;
    } else if(!course[num]){
        return true
    }
    set.add(p);
    for (const p of course[num]){
   
      if(!takeCourse(course,num + 1,p,set)) return false;
      set.delete(p)
    }

    return true
};

// const p = [
//   [0, 1],
//   [0, 2],
//   [1, 3],
//   [1, 4],
//   [3, 4],
// ];

const p = [[0,1],[1,0]]
canFinish(2, p);


