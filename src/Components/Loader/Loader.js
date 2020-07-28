import React, { Component } from "react";
import classes from "./Loader.module.css";

// import {
//   // exportComponentAsJPEG,
//   // exportComponentAsPDF,
//   exportComponentAsPNG,
// } from "react-component-export-image";

// class ComponentToPrint extends Component {
//   render() {
//     // console.log(document.getElementById('tasks-data'))
//     return document.getElementById('tasks-data');
//   }
// }

class Loader extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    const taskloader = () => {
      const date = document.getElementById("date").value;
      if (date === "") {
        // console.log("date not selected");
      } else {
        // console.log(date);
        this.props.load(date);
      }
    };

    return (
      <React.Fragment>
        {/* <ComponentToPrint ref={this.componentRef} /> */}
        <div className={classes.Loader}>
          <span>Select Date: </span>
          <input
            type="date"
            className={classes.inp}
            id="date"
            onChange={taskloader}
          ></input>
          <button className={classes.btn} onClick={taskloader}>
            ↻ Refresh
          </button>
          <button className={classes.btn} onClick={this.props.loaderHandler}>
            ⌘ Load All
          </button>
          <button
            className={classes.btn}
            // onClick={() => exportComponentAsPNG(this.componentRef)}
            onClick={()=>console.log('we will add this functionality soon.')}
          >
            Export Timesheet as PNG
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;
