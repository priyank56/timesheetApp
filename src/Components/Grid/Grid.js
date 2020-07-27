import React from "react";
import classes from "./Grid.module.css";

import Row from "./Row/Row";

const Grid = (props) => {
  const row = props.loadedData!=null
    ? props.loadedData.map((task,index) => {
        return <Row data={task} key={task.id} index={index} del={(index)=>props.del(index)}/>;
      })
    : props.data.map((task,index) => {
        return <Row data={task} key={task.id} index={index} del={(index)=>props.del(index)}/>;
      });
  return (
    <React.Fragment>
      <table className={classes.tbl}>
        <thead className={classes.th}>
          <tr>
            <th>Start time</th>
            <th>End Time</th>
            <th>Minutes</th>
            <th>Task Description</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
      <table className={classes.tbl2}>
        <tbody>
          <tr>
            <td className={classes.lbl}>Day Total In Minutes</td>
            <td className={classes.lbl}>Day Total In Hours</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Grid;
