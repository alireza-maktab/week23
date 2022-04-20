const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/name", (req, res) => {
  res.send(JSON.stringify({ name: "Abbase Boazar" }));
});

app.get("/error", (req, res) => {
  res.status(500).send("err");
});

app.get("/user", (req, res) => {
  const user = {
    id: 2,
    firstName: "Abbas",
    lastName: "Boazar",
    tasks: [1, 2, 3, 4],
    tags: [1, 2, 3],
  };
  res.send(JSON.stringify(user));
});

app.get("/task/:id", (req, res) => {
  const possibleIds = ["1", "2", "3", "4", "5"];
  const { id } = req.params;
  if (!possibleIds.includes(id)) {
    res.status(404).send(
      JSON.stringify({
        message: "not found",
      })
    );
  } else {
    const task = {
      id,
      title: "task foo bar baz " + id,
      tags: [(id % 3) + 1, ((id + 1) % 3) + 1],
    };
    res.send(JSON.stringify(task));
  }
});

app.get("/tag/:id", (req, res) => {
  const possibleIds = ["1", "2", "3"];
  const { id } = req.params;
  if (!possibleIds.includes(id)) {
    res.status(404).send(
      JSON.stringify({
        message: "not found",
      })
    );
  } else {
    const tag = {
      id,
      title: "tag " + id,
    };
    res.send(JSON.stringify(tag));
  }
});

app.get("/post/:id", (req, res) => {
  const { id } = req.params;
  const post = {
    id: id * 3,
    title: "Sample Post",
    description: `
      loraaslfhajshflkj saflkjh alskjhfl jkashflkj aslkfh
    `,
  };
  if (id % 2 === 1) {
    res.status(500).send(JSON.stringify({}));
  } else {
    res.send(JSON.stringify(post));
  }
});

app.get("/comment/:id", (req, res) => {
  const { id } = req.params;
  const post = {
    id: id * 2,
    author: "Akbar Mashti",
    comment: "Hello...",
  };
  res.send(JSON.stringify(post));
});

app.listen(port, () => {
  console.log(`sample api app listening on port ${port}`);
});
