import React, { Component } from "react";
import classes from "./Loader.module.css";
import html2canvas from "html2canvas";

class Loader extends Component {
  render() {
    const printDocument = async() => {

      // var tble = document.getElementById("table");
      // var row = tble.rows;
      // var cell=[];
      // for (var i = 0; i < row.length; i++) {
      //   cell[i]=row[i].cells[4].innerHTML;
      //   console.log(cell[i]);
      //   row[i].deleteCell(4);
      // }

      html2canvas(document.getElementById("tasks-data")).then((canvas) => {
        var link = document.createElement("a");
        link.download = "time-tracker";
        link.href = canvas.toDataURL();
        link.click();
      });

      // for (var j = 0; j < row.length; j++) {
      //   row[j].insertCell(4).innerHTML=cell[j];
      // }
    };
    return (
      <React.Fragment>
        <div className={classes.Loader}>
          <span>Select Date: </span>
          <input
            type="date"
            className={classes.inp}
            id="date"
            onChange={this.props.load}
          />
          {/* <button className={classes.btn} onClick={taskloader}>
            ↻ Refresh
          </button> */}
          <button className={classes.btn} onClick={this.props.loaderHandler}>
            ⌘ Load All
          </button>
          <button
            className={classes.btn}
            onClick={printDocument}
          >
            Export Timesheet as PNG
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;
