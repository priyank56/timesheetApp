import React, { Component } from "react";
import "./App.css";

import Add from "../Components/Add/Add";
import Grid from "../Components/Grid/Grid";
import Loader from "../Components/Loader/Loader";

class App extends Component {
  state = {
    tasks: [
      // format of task
      // {
      //   id: 1,
      //   starttime: "12:00",
      //   endtime: "14:00",
      //   taskDetail: "making something",
      //   date: "Mon Jul 27 2020 23:14:23 GMT+0530 (India Standard Time)",
      // },
    ],
    loadedTasks: null,
  };
  render() {
    const loadtaskHandler = (date) => {
      // ṭo copy tasks
      // const tasks = [...this.state.tasks];
      // to reference
      const tasks = this.state.tasks;
      const validtasks = tasks.filter((task) => task.date === date);
      this.setState({ loadedTasks: validtasks });
      // console.log("get a date : " + date);
    };
    const loaderInitHandler = () => {
      this.setState({ loadedTasks: null });
    };
    const addtaskHandler = (data) => {
      const tasks = [...this.state.tasks];

      tasks.push({
        id: this.state.tasks.length + 1,
        starttime: data["start-time"],
        endtime: data["end-time"],
        taskDetail: data["desc"],
        date: new Date().toISOString().slice(0, 10),
        e: false,
      });
      // console.log(tasks);
      this.setState({ tasks });
    };

    const delHandler = (index) => {
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1);
      this.setState({ tasks });
    };

    const edittaskHandler = (id, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].e = true;
      this.setState({ tasks });
    };

    const editCompleteHandler = (id, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].e = false;
      this.setState({ tasks });
    };

    const sTimeChangedHandler = (event, index) => {
      // console.log(event.target.value);
      const tasks = [...this.state.tasks];
      tasks[index].starttime = event.target.value;
      this.setState({ tasks });
    };

    const eTimeChangedHandler = (event, index) => {
      // console.log(event.target.value);
      const tasks = [...this.state.tasks];
      tasks[index].endtime = event.target.value;
      this.setState({ tasks });
    };

    const detailChangedHandler = (event, index) => {
      // console.log(event.target.value);
      const tasks = [...this.state.tasks];
      tasks[index].taskDetail = event.target.value;
      this.setState({ tasks });
    };
    return (
      <div className="App">
        <Loader
          load={(date) => loadtaskHandler(date)}
          loaderHandler={loaderInitHandler}
          data={this.state.tasks}
          loadedData={this.state.loadedTasks}
        />
        <hr />
        <Add addtask={(data) => addtaskHandler(data)} />
        <hr />
        <Grid
          data={this.state.tasks}
          loadedData={this.state.loadedTasks}
          del={(index) => delHandler(index)}
          edit={(id, index) => edittaskHandler(id, index)}
          editComplete={(id, index) => editCompleteHandler(id, index)}
          eTimeChanged={(event, index) => eTimeChangedHandler(event, index)}
          sTimeChanged={(event, index) => sTimeChangedHandler(event, index)}
          detailChanged={(event, index) => detailChangedHandler(event, index)}
        />
        <hr />
      </div>
    );
  }
}

export default App;
