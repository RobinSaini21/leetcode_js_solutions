const bubbleSort = (arr) =>{
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
         if(arr[j] > arr[j+1]) swap(arr,j,j+1);         
        }
    }

    console.log(arr)
}

const swap = (arr,i,j) =>{
    [arr[i],arr[j]] = [arr[j],arr[i]];
}


const arr = [7,3,4,3,8,4,2,7];
bubbleSort(arr);