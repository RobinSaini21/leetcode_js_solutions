const kClosest = (points = [], k) =>{
    points.sort((a,b) => squareRoot(a) - squareRoot(b))
    
    console.log(points.slice(0,k))
}

const squareRoot = ([x,y]) => x**2 + y**2;

const points = [[1,3],[-2,2]], k = 1;
kClosest(points,k)