export async function heapSort(arr, speed) {
    let length = arr.length;
    
    

    for (let i = Math.floor(length / 2); i >= 0; i--) { // heapify the whole array
        await heapify(arr, i, length, speed);
    }

    for (let i = arr.length - 1; i > 0; i--) {
        await swap(arr, 0, i, speed); // swap last element in heap with root
        length--; // decrease length of heap so the biggest number is not affected
        
        await heapify(arr, 0, length, speed); // heapify array again so biggest number is at root

    }

}




async function heapify(arr, i, length, speed) {
    var left = (2 * i) + 1;
    var right = (2 * i) + 2;

    var max = i;

    if (left < length && arr[left] > arr[max]) { max = left; }
    if (right < length && arr[right] > arr[max]) { max = right; }
    if (max !== i) { // if one of child nodes are bigger than parent
        await swap(arr, max, i, speed);
        await heapify(arr, max, length, speed); // recursively heapify the affected leaf
    }
}

async function swap(arr, a, b, speed) { // Swaps Two variables in array arr at indexes a & b 

    let bars = document.getElementsByClassName('array-bar');
    
    
    bars[a].style.height = `${arr[b]/10}%`;
    bars[b].style.height = `${arr[a]/10}%`;

    bars[b].style.backgroundColor = 'red'

    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    await delay(speed);

    bars[b].style.backgroundColor = 'green';
}



function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }