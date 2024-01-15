const simplifyPath = (path) => {
  let dirs = path.split("/");
  let stack = [];

  for (const dis of dirs) {
    if(dis === ""){
        continue;
    }
    if (dis === "..") {
      if (stack.length) {
        stack.pop();
      } 
    } else {
        stack.push(dis)
    }
  }

 console.log("/" + stack.join("/"))
};

const path = "/home//foo/";

simplifyPath(path);
