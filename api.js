const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/name", (req, res) => {
  res.send(JSON.stringify({name: 'Abbase Boazar'}));
});

app.get("/error", (req, res) => {
    res.status(500).send('err')
});

app.listen(port, () => {
  console.log(`sample api app listening on port ${port}`);
});
