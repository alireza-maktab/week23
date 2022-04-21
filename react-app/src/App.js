import { Component } from "react";
import { SearchInput } from "./SearchInput";

const deserialize = (res) => res.json();

class App extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.getUserTasksFromApi().then((tasks) => {
      this.setState({ tasks });
    });
  }

  async getUserTasksFromApi() {
    const user = await fetch("http://localhost:3000/user").then(deserialize);
    const tasksPromises = user.tasks.map((taskId) => {
      return fetch(`http://localhost:3000/task/${taskId}`).then(deserialize);
    });
    const tagsPromises = user.tags.map((tagId) => {
      return fetch(`http://localhost:3000/tag/${tagId}`).then(deserialize);
    });
    const tasks = await Promise.all(tasksPromises);
    const tags = await Promise.all(tagsPromises);

    for (let task of tasks) {
      task.tags = task.tags.map((tagId) => {
        return tags.find((tag) => tag.id == tagId);
      });
    }
    return tasks;
  }

  render() {
    const tasksElements = this.state.tasks.map((task) => (
      <div key={task.id}>
        <p>{task.title}</p>
        <ul>
          {task.tags.map((tag) => (
            <li key={tag.id}>{tag.title}</li>
          ))}
        </ul>
      </div>
    ));
    return (
      <div className="App">
        <SearchInput />
        {tasksElements}
      </div>
    );
  }
}

export default App;
