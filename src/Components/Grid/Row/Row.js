import React from "react";
import classes from "../Grid.module.css";

const Row = (props) => {
    console.log(props); 
  return (
    <tr>
      <td>{props.data.starttime}</td>
      <td>{props.data.endtime}</td>
      <td>{props.data.taskDetail}</td>
      <td>{props.data.date}</td>
      <td>
        <button className={classes.btn}>Edit</button>
        <button className={classes.btn}>Delete</button>
      </td>
    </tr>
  );
};
export default Row;
