function mergeSort(arr){
    if(arr.length === 0 || arr.length === 1){
        return arr;
    }
    else if(arr.length === 2){
        if(arr[0] > arr[1]){
            return [arr[1], arr[0]]
        } else return arr;
    }

    let sorted = [];
    let middleIdx = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, middleIdx));
    let right = mergeSort(arr.slice(middleIdx, arr.length));
    sorted = sorted.concat(left);
    sorted = sorted.concat(right);
    sorted = sorted.sort((a, b) => a-b);

    
    // console.log("time="+time, "Input arr:", arr, "left: ", left, "right: ", right, "sorted result:", sorted);

    return sorted;
    
}

function quickSort(arr, paramHead=0, paramRear=arr.length-1){
    let head = paramHead;
    let rear = paramRear;
    let diff = rear - head;
    // console.log("arr: ", arr.slice(head, rear));
    // console.log("diff="+diff);

    if(diff === 0 || diff === 1){
        return;
    }
    let pivot = arr[head + Math.floor((rear-head)/2)];
    // console.log("pivot="+pivot, arr);

    let time = 1;
    while(head < rear){
        // console.log("time="+time);
        time++;
        // console.log("head="+head, "rear="+rear);
        if(arr[head] >= pivot && arr[rear] <= pivot){
            // console.log("arr[head]="+arr[head], "arr[rear]="+arr[rear]);
            let temp = arr[head];
            arr[head] = arr[rear];
            arr[rear] = temp;
            head++; rear--;
        } else {
            if(arr[head] < pivot) head++;
            if(arr[rear] > pivot) rear--;
        }
        // console.log(arr);
        // console.log();
    }
    // console.log("sorted: ", arr);

    quickSort(arr, paramHead, rear);
    quickSort(arr, head, paramRear);

    return arr;
}

let arrays = [];

for(let k=1; k<4; k++){
    let arr = [];
    for(let i=0; i<(Math.pow(10, k)); i++){
        arr.push(Math.floor(Math.random()*10));
    }
    arrays.push(arr);
}

arrays.map((arr, index) => {
    console.log("Array "+(index+1)+":", arr);
    let mergeArr = arr.slice();
    let quickArr = arr.slice();
    console.log();

    let mergeStart = performance.now(); 
    mergeArr = mergeSort(mergeArr);
    let mergeEnd = performance.now();
    console.log("==Merge Sort==");
    console.log("Sorted array: ", mergeArr);
    console.log("Performance: ", (mergeEnd - mergeStart), "ms");
    console.log();

    let quickStart = performance.now(); 
    quickSort(quickArr);
    let quickEnd = performance.now();
    console.log("==Quick Sort==");
    console.log("Sorted array: ", quickArr);
    console.log("Performance: ", (quickEnd - quickStart), "ms");
    console.log("\n\n");
});
