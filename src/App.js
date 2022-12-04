import './App.css';
import React, {Component} from 'react';

import Navbar from './components/Navbar';
import Visualizer from './components/Visualizer';
import { bubbleSort } from './algorithms/Bubble';
import { insertionSort } from './algorithms/insertion';
import { selectionSort } from './algorithms/selection';
import { mergeSort } from './algorithms/Merge';
import { quickSort } from './algorithms/Quick';
import { heapSort } from './algorithms/Heap';

const length = 60;

class App extends Component{

  state = {
    array: [],
    count: length,
    speed: 50
  };

  componentDidMount() { // Reset The array as soon as DOM is mounted
    this.handleReset();
  }

  handleRandom = (min, max) => { // function to generate a random number between min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
    
  }

  handleReset = () => { // function to generate a new random array 
    const array = [];
    for (let i = 0; i < 60; i++) {
      array.push(this.handleRandom(10, 1000));
    }
    this.setState({ array });
    let bars2 = document.getElementsByClassName("array-bar");
    for(let a=0; a<bars2.length; a++){
      bars2[a].style.backgroundColor = 'rgb(84, 109, 185)';
    }
  }

  handleSpeed = (n) => { // function to set speed of slider to state
    let p = 100 - n;
    this.setState({ speed:p })
    console.log(this.state.speed)
  }

  buttonDisabler = (n) => { // function to make buttons not work while sorting is going on
    
    let buttons = document.getElementsByClassName('btn');
    let slider = document.getElementById('slider');
    if (n === 0) {
      slider.disabled = true;
      for (let i = 0; i < buttons.length; i++)  {
        buttons[i].disabled = true;
    }
    }
    else if (n === 1) {
      slider.disabled = false;
      for (let i = 0; i < buttons.length; i++)  {
        buttons[i].disabled = false;
    }
    } 
  }


  handleBubble = async() => { // Bubble Sort
    
    let { array } = this.state;
    this.buttonDisabler(0);
    await bubbleSort(array, this.state.speed);
    this.buttonDisabler(1);
  }

  handleInsertion = async() => { // Insertion Sort
    const { array } = this.state;
    this.buttonDisabler(0)
    await insertionSort(array, array.length, this.state.speed);
    this.buttonDisabler(1);
  }

  handleSelection = async() => { // Selection Sort
    let { array } = this.state;
    this.buttonDisabler(0);
    await selectionSort(array, this.state.speed);   
    this.buttonDisabler(1);
  }

  handleMerge = async() => { // Merge Sort
    let { array } = this.state;
    this.buttonDisabler(0);
    await mergeSort(array, this.state.speed);   
    this.buttonDisabler(1);
  }


  handleQuick= async() => { // Quick Sort
    let { array } = this.state;
    this.buttonDisabler(0);
    await quickSort(array, this.state.speed);   
    this.buttonDisabler(1);
  }

  handleHeap= async() => { // Heap Sort
    let { array } = this.state;
    this.buttonDisabler(0);
    await heapSort(array, this.state.speed);   
    this.buttonDisabler(1);
  }

  render(){
    return (
      <div>
        <Navbar
        onReset={this.handleReset}
        onBubble={this.handleBubble}
        onInsertion={this.handleInsertion}
        onSelection={this.handleSelection}
        onMerge={this.handleMerge}
        onQuick={this.handleQuick}
        onHeap={this.handleHeap}
        onSpeed={this.handleSpeed}
         />
        <Visualizer array={this.state.array}/>

      </div>
    );
  }

}

export default App;
