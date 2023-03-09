const mongoose = require("mongoose");

// connect to the database and added params to ignore all the deprecation warnings
mongoose.connect("mongodb://127.0.0.1/tasks_list_db",{useNewUrlParser: true, useUnifiedTopology: true });

// acquire the connection(to check if it is successful)
const db = mongoose.connection;

//on error in connection
db.on("error", console.error.bind(console, "error connecting to db"));

// if db is up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});
