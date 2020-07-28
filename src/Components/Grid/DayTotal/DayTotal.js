import React from "react";
import classes from "./DayTotal.module.css";

const findMin = (props) => {
  if (props.loadedData !== null) {
    return props.loadedData
      .map(
        (task) =>
          (Date.parse("01 Jan 1970 " + task.endtime + ":00 GMT") -
            Date.parse("01 Jan 1970 " + task.starttime + ":00 GMT")) /
          (60 * 1000)
      )
      .reduce((a, b) => a + b, 0);
  } else {
    return props.data
      .map(
        (task) =>
          (Date.parse("01 Jan 1970 " + task.endtime + ":00 GMT") -
            Date.parse("01 Jan 1970 " + task.starttime + ":00 GMT")) /
          (60 * 1000)
      )
      .reduce((a, b) => a + b, 0);
  }
};
const DayTotal = (props) => {
  return (
    <tr>
      <td className={classes.lbl}>
        Total In Minutes : <span>{findMin(props)}</span>min.
      </td>
      <td className={classes.lbl}>
        Total In Hours : <span>{Math.round(findMin(props) / 60)}</span>hrs. <span>{Math.round(findMin(props) % 60)}</span>min.
      </td>
    </tr>
  );
};
export default DayTotal;
