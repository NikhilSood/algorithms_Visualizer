export async function insertionSort(array, len, speed) { // function to do insertion sort on array and do animations
    let key, i, j, bars;
    for (i = 1; i < len; i++) {
        bars = document.getElementsByClassName('array-bar');
        key = array[i];
        
        j = i - 1;
        while (j >= 0 && array[j] > key) { // while element to the left of key are greater than it
            array[j + 1] = array[j];
            // make the bar being put in its right place as red
            bars[j + 1].style.backgroundColor = 'red';
            await delay(speed);
            bars[j + 1].style.backgroundColor = 'green';
            bars[j + 1].style.height = `${array[j] / 10}%`;
            bars[j].style.height = `${key / 10}%`
            
            bars[j].style.backgroundColor = 'red';
            await delay(speed);
            bars[j].style.backgroundColor = 'green';
            j -= 1;
        }
        await delay(speed);
        
        array[j + 1] = key;
        // puts the element in the right spot
        bars[j + 1].style.height = `${key / 10}%`
        await delay(speed);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }