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
    
    const delHandler = async (id) => {
      const tasks = [...this.state.tasks];
      tasks.splice(tasks.findIndex(task=>task.id===id), 1);
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
    };

    const edittaskHandler = async (id) => {
      const tasks = [...this.state.tasks];
      tasks[tasks.findIndex(task=>task.id===id)].e = true;
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
    };

    const editCompleteHandler = async (id) => {
      const tasks = [...this.state.tasks];
      tasks[tasks.findIndex(task=>task.id===id)].e = false;
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
    };

    const sTimeChangedHandler = async (event, id) => {
      const tasks = [...this.state.tasks];
      tasks[tasks.findIndex(task=>task.id===id)].starttime = event.target.value;
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
    };

    const eTimeChangedHandler = async (event, id) => {
      const tasks = [...this.state.tasks];
      tasks[tasks.findIndex(task=>task.id===id)].endtime = event.target.value;
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
    };

    const detailChangedHandler = async (event, id) => {
      const tasks = [...this.state.tasks];
      tasks[tasks.findIndex(task=>task.id===id)].taskDetail = event.target.value;
      await this.setState({ tasks: tasks });
      await loadtaskHandler();
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
          del={(id) => delHandler(id)}
          edit={(id) => edittaskHandler(id)}
          editComplete={(id) => editCompleteHandler(id)}
          eTimeChanged={(event, id) => eTimeChangedHandler(event, id)}
          sTimeChanged={(event, id) => sTimeChangedHandler(event, id)}
          detailChanged={(event, id) => detailChangedHandler(event, id)}
        />
        <hr />
      </div>
    );
  }
}

export default App;
