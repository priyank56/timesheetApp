import React, { Component } from "react";
import "./App.css";

import Add from "../Components/Add/Add";
import Grid from "../Components/Grid/Grid";
import Loader from "../Components/Loader/Loader";

class App extends Component {
  state = {
    tasks: [],
    loadedTasks: [],
  };
  render() {
    const loadtaskHandler = () => {
      const date=document.getElementById("date").value;
      const tasks = this.state.tasks;
      if (date === "") {
        this.setState({ loadedTasks: tasks });
      } else {
        const validtasks = tasks.filter((task) => task.date === date);
        this.setState({ loadedTasks: validtasks });
      }
    };
    const loaderInitHandler = () => {
      this.setState({ loadedTasks: this.state.tasks });
      document.getElementById("date").value = "";
    };
    const addtaskHandler = async (data) => {
      const tasks = [...this.state.tasks];
      await tasks.push({
        id: this.state.tasks.length + 1,
        starttime: data["start-time"],
        endtime: data["end-time"],
        taskDetail: data["desc"],
        date:
          data["date"] !== ""
            ? data["date"]
            : new Date().toISOString().slice(0, 10),
        e: false,
      });
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
    };

    const delHandler = (index) => {
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1);
      this.setState({ tasks: tasks });
    };

    const edittaskHandler = (id, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].e = true;
      this.setState({ tasks: tasks });
    };

    const editCompleteHandler = (id, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].e = false;
      this.setState({ tasks: tasks });
    };

    const sTimeChangedHandler = (event, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].starttime = event.target.value;
      this.setState({ tasks: tasks });
    };

    const eTimeChangedHandler = (event, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].endtime = event.target.value;
      this.setState({ tasks: tasks });
    };

    const detailChangedHandler = (event, index) => {
      const tasks = [...this.state.tasks];
      tasks[index].taskDetail = event.target.value;
      this.setState({ tasks: tasks });
    };
    return (
      <div className="App">
        <Loader
          load={loadtaskHandler}
          loaderHandler={loaderInitHandler}
          data={this.state.tasks}
        />
        <hr />
        <Add addtask={(data) => addtaskHandler(data)}/>
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
