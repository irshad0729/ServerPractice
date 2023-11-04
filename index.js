const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./router/user");

app.get("/", (req, res) => {
  res.send("<h1>irshad</h1>");
});

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("server is listening to port no:", port);
});
