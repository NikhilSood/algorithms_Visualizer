export async function quickSort (array, speed) {
    let animations = [];
    const LENGTH = array.length;
    quickSorter(array, 0, LENGTH - 1, animations);

    let [barOneIdx, barTwoIdx, barThreeIdx] = [0, 0, 0];
    for (let i = 0; i < animations.length; i++) { 
      const arrayBars = document.getElementsByClassName('array-bar');
      
      if (i % 3 === 0) {

        [barOneIdx, barTwoIdx, barThreeIdx] = animations[i];
        if (typeof barThreeIdx !== 'undefined') {
            // colors the different elements in animation array if its a comparison 
            arrayBars[barOneIdx].style.backgroundColor = 'red';
            arrayBars[barTwoIdx].style.backgroundColor = 'yellow';
            (barThreeIdx > LENGTH) ? barThreeIdx = LENGTH : arrayBars[barThreeIdx].style.backgroundColor = 'black';
        }
      } 
      
      else {
        // if its a swap adjusts the elements height
        let [barIdx, value] = animations[i];
        arrayBars[barIdx].style.height = `${value/10}%`;
      }
      await delay(speed);
      // reverts the colors back to default
      arrayBars[barOneIdx].style.backgroundColor = 'rgb(84, 109, 185)';
      arrayBars[barTwoIdx].style.backgroundColor = 'rgb(84, 109, 185)';
      
      if (typeof barThreeIdx !== 'undefined') {
      arrayBars[barThreeIdx].style.backgroundColor = 'green';
      }
    }
  }



function partition (arr, low, high, animations) {
    const pivot = arr[high];

    let i = low - 1;
    for (let j = low; j < high; j++) {
      // color change animation
      animations.push([j, high, i + 1])
      if (arr[j] < pivot) {
        i++;
        // swap arr[j] and arr[i]
        // Where the SWAP happens
        animations.push([j, arr[i]]);
        animations.push([i, arr[j]]);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      // did an else here so i could manage animations array better (by having 2 value changes after every color change)
      else {
        animations.push([i + 1, arr[i + 1]]);
        animations.push([j, arr[j]]);
      }

    }
      // pivot swap happens here 
      // same thing here first one is a color change
      animations.push([high, i + 1]);
      // these two are for changing values of pivot and index i + 1
      animations.push([high, arr[i + 1]]);
      animations.push([i + 1, arr[high]]);
      [arr[high], arr[i + 1]] = [arr[i + 1], arr[high]]


      return (i + 1)
  }



function quickSorter (arr, low, high, animations) { // actual quick sort is here 
    // base case
    if (low >= high) {
      return;
    }
    // finds the partition in the array which makes every element left of partition less than it and every element to the right greater
    let pi = partition(arr, low, high, animations);

    // Recursively does the same for left and right side of partition
    quickSorter(arr, low, pi - 1, animations);
    quickSorter(arr, pi + 1, high, animations);

  }


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
