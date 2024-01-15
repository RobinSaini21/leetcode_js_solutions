const getGrade = (Ip) => {
  const subjects = Object.keys(Ip);
  const students = Object.keys(Ip[subjects[0]]);
  let grades = {};
  let nameArray = [];

  for (const student of students) {
    let arr = [];
    arr.push(student);
    nameArray.push(arr);
    grades[student] = {};
  }


  for (let i = 0; i < students.length; i++) {
    const name = nameArray[i];

    for (const subject in Ip) {
      for (const n of name) {
        let grad = Ip[subject];
        grades[n][subject] = grad[n];
      }
    }
  }

  console.log(grades);
};

const ip = {
  eng: {
    a: 10,
    b: 20,
    c: 20,
    d: 76
  },
  math: {
    a: 30,
    b: 20,
    c: 45,
    d: 56
  },
  hindi: {
    a: 56,
    b: 89,
    c: 34,
    d: 45
  },
  sci:{
    a: 9,
    b: 6,
    c:76,
    d: 34
  }
};

getGrade(ip);
