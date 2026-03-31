const express = require("express");
const { readFile } = require("node:fs");

const app = express();

app.get("/", (req, res) => {
  readFile("./home.html", "utf8", (err, html) => {
    if (err) {
      return res.status(500).send("i\'m your father");
    }
    res.send(html);
  });
});

app.listen(process.env.PORT || 3000, () => console.log("i am alive"));
