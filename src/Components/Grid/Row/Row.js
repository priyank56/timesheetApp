import React from "react";
import classes from "../Grid.module.css";

const Row = (props) => {
  // const cnvmin=(hr)=>{
  //   return hr*60;
  // }
  // let val=props.data.endtime - props.data.starttime;
  // let val=cnvmin(props.data.endtime);
  return (
    <tr>
      <td>{props.data.starttime}</td>
      <td>{props.data.endtime}</td>
      <td>{0}</td>
      <td>{props.data.taskDetail}</td>
      <td>
        <button className={classes.btn}>Edit</button>
        <button className={classes.btn} onClick={()=>props.del(props.index)}>Delete</button>
      </td>
    </tr>
  );
};
export default Row;
