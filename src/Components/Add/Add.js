import React, { Component } from "react";
import classes from "./Add.module.css";

class Add extends Component {
  render() {
    const add = () => {
      const data = {
        "start-time": document.getElementById("start-time").value,
        "end-time": document.getElementById("end-time").value,
        "desc": document.getElementById("desc").value,
      };

      this.props.addtask(data);
    };
    return (
      <React.Fragment>
        <span>Start Time</span>
        <input
          type="time"
          className={classes.inp}
          name="start-time"
          id="start-time"
          required
        />
        &emsp;
        <span>End Time</span>
        <input
          type="time"
          className={classes.inp}
          name="end-time"
          id="end-time"
          required
        />
        &emsp;
        <input
          type="text"
          className={classes.des}
          name="description"
          id="desc"
          placeholder="Task description"
          required
        />
        &emsp;
        <input
          type="button"
          value="Add"
          className={classes.btn}
          onClick={add}
        />
      </React.Fragment>
    );
  }
}

export default Add;
