import React, { Component } from "react";
import classes from "./Add.module.css";

class Add extends Component {
  render() {
    const add = (event) => {
      const data = {
        "start-time": document.getElementById("start-time").value,
        "end-time": document.getElementById("end-time").value,
        "desc": document.getElementById("desc").value,
        "date": document.getElementById("date").value,
      };
      if(!data["start-time"] || !data["end-time"] || !data["desc"]){
        console.log('some values may empty!');
      }else{
        event.preventDefault();
        if(data["start-time"]>data["end-time"]){
          alert('Please enter Ending time of task to Bigger than Starting time.')
        }else{
          document.getElementById("start-time").value="";
          document.getElementById("end-time").value="";
          document.getElementById("desc").value="";
          this.props.addtask(data);
        }
      }
    };
    

    return (
      <React.Fragment>
        <form>
        <span>Start Time: </span>
        <input
          type="time"
          className={classes.inp}
          name="start-time"
          id="start-time"
          required
        />
        &emsp;
        <span>End Time:</span>
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
          type="submit"
          value="Add"
          className={classes.btn}
          onClick={(e)=>add(e)}
        />
        </form>
      </React.Fragment>
    );
  }
}

export default Add;
