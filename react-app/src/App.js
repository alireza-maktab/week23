import { Component } from "react";

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
    const tasksApiCallsPromises = user.tasks.map((id) =>
      fetch(`http://localhost:3000/task/${id}`).then(deserialize)
    );
    const tagsApiCallsPromises = user.tags.map((id) =>
      fetch(`http://localhost:3000/tag/${id}`).then(deserialize)
    );

    const tasks = await Promise.all(tasksApiCallsPromises);
    const tags = await Promise.all(tagsApiCallsPromises);

    return tasks.map((task) => ({
      ...task,
      tags: task.tags.map((tagId) => tags.find((tag) => tag.id == tagId)),
    }));
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
    return <div className="App">{tasksElements}</div>;
  }
}

export default App;
