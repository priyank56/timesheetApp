import React from "react";
import classes from "./Grid.module.css";
import DayTotal from "./DayTotal/DayTotal";
import Row from "./Row/Row";

const Grid = (props) => {
  const row = props.loadedData.map((task, index) => {
    return (
      <Row
        data={task}
        key={task.id}
        index={index}
        del={(id) => props.del(id)}
        edit={(id) => props.edit(id)}
        editComplete={(id) => props.editComplete(id)}
        sTimeChanged={(event,id) => props.sTimeChanged(event,id)}
        eTimeChanged={(event,id) => props.eTimeChanged(event,id)}
        detailChanged={(event,id) => props.detailChanged(event,id)}
      />
    );
  });

  return (
    <div id="tasks-data" className={classes.Grid}>
      <table id="table" className={classes.tbl}>
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
          <DayTotal data={props.data} loadedData={props.loadedData} />
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
