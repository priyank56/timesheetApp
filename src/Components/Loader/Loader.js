import React, { Component } from "react";
import classes from "./Loader.module.css";

class Loader extends Component {
  render() {
    const taskloader=()=>{
      const date=document.getElementById('date').value;
      if(date===""){
        console.log('date not selected');
      }else{
        console.log(date);
        this.props.load(date);
      }
    }
    const timesheet=()=>{
      console.log('timesheet is here');
    }
    return (
      <div className={classes.Loader}>
        <span>Select Date: </span>
        <input type="date" className={classes.inp} id="date" onChange={taskloader}></input>
        <button className={classes.btn} onClick={taskloader}>↻ Refresh</button>
        <button className={classes.btn} onClick={this.props.loaderHandler}>⌘ Load All</button>
        <button className={classes.btn} onClick={timesheet}>Export Timesheet as PNG</button>
      </div>
    );
  }
}

export default Loader;
