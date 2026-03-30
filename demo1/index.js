const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    return res.status(418).send({ message: "We need a logo!" });
  }

  res.send({ message: `${id} and ${logo}` });
});

app.get("/message", (req, res) => {
  res.send({ message: "hello fullstack!!! wooo!!!" });
});
