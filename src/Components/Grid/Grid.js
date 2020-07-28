import React from "react";
import classes from "./Grid.module.css";
import DayTotal from "./DayTotal/DayTotal";
import Row from "./Row/Row";

const Grid = (props) => {
  const row =
    props.loadedData != null
      ? props.loadedData.map((task, index) => {
          return (
            <Row
              data={task}
              key={task.id}
              index={index}
              del={(index) => props.del(index)}
              edit={(id) => props.edit(id, index)}
              editComplete={(id) => props.editComplete(id, index)}
              sTimeChanged={(event) => props.sTimeChanged(event, index)}
              eTimeChanged={(event) => props.eTimeChanged(event, index)}
              detailChanged={(event) => props.detailChanged(event, index)}
            />
          );
        })
      : props.data.map((task, index) => {
          return (
            <Row
              data={task}
              key={task.id}
              index={index}
              del={(index) => props.del(index)}
              edit={(id) => props.edit(id, index)}
              editComplete={(id) => props.editComplete(id, index)}
              sTimeChanged={(event) => props.sTimeChanged(event, index)}
              eTimeChanged={(event) => props.eTimeChanged(event, index)}
              detailChanged={(event) => props.detailChanged(event, index)}
            />
          );
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
          <DayTotal data={props.data} loadedData={props.loadedData}/>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Grid;
