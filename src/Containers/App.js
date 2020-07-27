import React, { Component } from "react";
import "./App.css";

import Add from "../Components/Add/Add";
import Grid from "../Components/Grid/Grid";
import Loader from "../Components/Loader/Loader";

class App extends Component {
  state = {
    tasks: [
      {
        id: "1",
        starttime: "12:00AM",
        endtime: "1:00AM",
        taskDetail: "making something",
        date: "7/27/2020",
      },
      {
        id: "2",
        starttime: "1:00AM",
        endtime: "2:00AM",
        taskDetail: "making otherthing",
        date: "7/27/2020",
      },
    ],
  };
  render() {
    return (
      <div className="App">
        <Loader />
        <hr />
        <Add />
        <hr />
        <Grid data={this.state.tasks}/>
        <hr />
      </div>
    );
  }
}

export default App;
