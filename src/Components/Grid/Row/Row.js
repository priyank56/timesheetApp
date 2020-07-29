import React, { Component } from "react";
import classes from "../Grid.module.css";
import classesAdd from "../../Add/Add.module.css";

class Row extends Component {
  render() {
    const cnvTomin=(startTime,endTime)=>{
      return (Date.parse('01 Jan 1970 '+endTime+':00 GMT')-Date.parse('01 Jan 1970 '+startTime+':00 GMT'))/(60*1000);
    }

    return this.props.data.e ? (
      <tr>
        <td><input type="time" className={classesAdd.inp} value={this.props.data.starttime} onChange={(event)=>{this.props.data.endtime===""?this.props.sTimeChanged(event,this.props.data.id):event.target.value>this.props.data.endtime?alert('Please enter Staring time of task to Less than Ending time.'):this.props.sTimeChanged(event,this.props.data.id)}} required/></td>
        <td><input type="time" className={classesAdd.inp} value={this.props.data.endtime} onChange={(event)=>{event.target.value<this.props.data.starttime?alert('Please enter Ending time of task to Bigger than Starting time.'):this.props.eTimeChanged(event,this.props.data.id)}} required/></td>
        <td>{cnvTomin(this.props.data.starttime,this.props.data.endtime)}</td>
        <td><input type="text" className={classesAdd.inp} value={this.props.data.taskDetail} onChange={(event)=>this.props.detailChanged(event,this.props.data.id)} required/></td>
        <td>
          <button
            className={classes.btn}
            onClick={() => this.props.editComplete(this.props.data.id)}
          >
            ✓ Save
          </button>
          <button
            className={classes.btn}
            onClick={() => this.props.del(this.props.data.id)}
          >
            ✗ Delete
          </button>
        </td>
      </tr>
    ) : (
      <tr>
        <td>{this.props.data.starttime}</td>
        <td>{this.props.data.endtime}</td>
        <td>{cnvTomin(this.props.data.starttime,this.props.data.endtime)}</td>
        <td>{this.props.data.taskDetail}</td>
        <td>
          <button
            className={classes.btn}
            onClick={() => this.props.edit(this.props.data.id)}
          >
            Edit
          </button>
          <button
            className={classes.btn}
            onClick={() => this.props.del(this.props.data.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default Row;
