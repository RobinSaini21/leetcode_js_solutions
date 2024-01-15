const selectionSort = (arr) =>{
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let idx = i;
        for (let j = i + 1; j < n; j++) {
         if(arr[idx] > arr[j]) idx = j;         
        }
        swap(arr,idx,i);
    }

    console.log(arr)
}

const swap = (arr,i,j) =>{
    [arr[i],arr[j]] = [arr[j],arr[i]];
}


const arr = [7,3,4,3,8,4,2,7];
selectionSort(arr);