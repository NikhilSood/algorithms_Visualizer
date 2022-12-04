export async function selectionSort(array, speed) {
    // loops through array and finds min element and swaps it with element at index i
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
  
            if (array[min] > array[j]) {
                min = j;
          }
        }
        if (min !== i) {  
            await swap(array, min, i, speed);           
        }
        await delay(speed);
      } 

}


export async function swap(arr, a, b, speed) { // takes original array and 2 values and swaps bar heights 
    let bars = document.getElementsByClassName("array-bar");

    bars[a].style.height = `${arr[b]/10}%`
    bars[b].style.height = `${arr[a]/10}%`

    bars[a].style.backgroundColor = 'red';
    bars[b].style.backgroundColor = 'red';

    [arr[a], arr[b]] = [arr[b], arr[a]];
    await delay(speed);

    bars[a].style.backgroundColor = 'rgb(84, 109, 185)';
    bars[b].style.backgroundColor = 'green';   
}


export function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  