import React,{Component} from "react";
// import "./sortingvisualizer.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { speed: 50 };
  }

  handleChange = (event) => {
    this.setState({ speed: event.target.value });
    this.props.onSpeed(event.target.value);
  };
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="navbar-brand">
            AlgorithmsVisualizer
          </h1>
          <span>
            <label htmlFor="slider" className="form-label text-light">
              Speed Slider
            </label>
            <input
              type="range"
              className="form-range"
              // id="customRange1"
              min="0"
              max="100"
              id="slider"
              value={this.state.speed}
              onChange={this.handleChange}
            ></input>
          </span>
          <button
            className="btn btn-warning active m-2"
            aria-current="page"
            onClick={() => this.props.onReset()}
          >
            Reset Array
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button
                  className="btn btn-warning m-2"
                  onClick={() => this.props.onBubble()}
                  data-bs-toggle="collapse" 
                  data-bs-target=".navbar-collapse.show"
                >
                  Bubble Sort
                </button>
              </li>
              <li className="nav-item">
              <button
                  className="btn btn-warning m-2"
                  onClick={() => this.props.onInsertion()}
                  data-bs-toggle="collapse" 
                  data-bs-target=".navbar-collapse.show"
                >
                  Insertion Sort
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning m-2"
                  onClick={() => this.props.onSelection()}
                  data-bs-toggle="collapse" 
                  data-bs-target=".navbar-collapse.show"
                >
                  Selection Sort
                </button>
              </li>
              
              <li className="nav-item">
                <button
                  className="btn btn-warning m-2"
                  onClick={() => this.props.onMerge()}
                  data-bs-toggle="collapse" 
                  data-bs-target=".navbar-collapse.show"
                >
                  Merge Sort
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning m-2"
                  onClick={() => this.props.onQuick()}
                  data-bs-toggle="collapse" 
                  data-bs-target=".navbar-collapse.show"
                >
                  Quick Sort
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-warning m-2"
                  onClick={() => this.props.onHeap()}
                  data-bs-toggle="collapse" 
                  data-bs-target=".navbar-collapse.show"
                >
                  Heap Sort
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
