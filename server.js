const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cron = require("node-cron");
const User = require("./modals/usermodal");
const { Login } = require("./controllers/Login");
const { Signup } = require("./controllers/Signup");
const { Searchnews } = require("./controllers/Searchnews");
const { Dumpnews } = require("./controllers/Dumpnews");
const app = express();
app.use(express.json());
app.use(cors());
const port = 8080;
app.post("/login", Login);
app.post("/signup", Signup);
app.post("/searchnews", Searchnews);

mongoose.connect(
  "mongodb+srv://cluster0admin:cluster0admin@cluster0.iq82tkg.mongodb.net/NewsFeedly?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
mongoose.connection
  .once("open", function () {
    console.log("Database connected Successfully");
  })
  .on("error", function (err) {
    console.log("Error", err);
  });

// Schedule the task to run every 24 hours
cron.schedule(
  "0 0 * * *",
  () => {
    Dumpnews();
  },
  {
    scheduled: true,
    timezone: "UTC",
  }
);

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
