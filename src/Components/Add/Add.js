import React, { Component } from "react";
import classes from "./Add.module.css";

class Add extends Component {
  render() {
    return (
      <React.Fragment>
        <span>Start Time</span>
        <input type="time" className={classes.inp} name="start-time" id="start-time"/>
        &emsp;
        <span>End Time</span>
        <input type="time" className={classes.inp} name="end-time" id="end-time"/>
        &emsp;
        <input type="text" className={classes.des} name="description" id="desc" placeholder="Task description"/>
        &emsp;
        <input type="button" value="Add" className={classes.btn} />
      </React.Fragment>
      );
  }
}

export default Add;