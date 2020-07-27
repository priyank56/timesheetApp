import React, { Component } from "react";
import classes from  "./Loader.module.css";

class Loader extends Component {
  render() {
    return (
      <div className={classes.Loader}>
        <span>Select Date:  </span>
        <input type="date" className={classes.inp}></input>
        <button className={classes.btn}>Load</button>
        <button className={classes.btn}>Export Timesheet as PNG</button>
      </div>
    );
  }
}

export default Loader;
