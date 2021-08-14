// to start mongo sudo service mongodb start
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

app.use(express.json());
app.use(express.urlencoded());
app.use("/api/users", require("./routes/usersRoutes"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(4000 || process.env.port, function () {
  console.log("now listening for requests");
});
