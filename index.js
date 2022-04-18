const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 8081;
const URL = process.env.MONGODB_URL;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("MongoDB Connection Success!");
});

const StudentRouter = require("./routes/IT20122614/StudentRoute");
app.use("/api/students", StudentRouter);

app.listen(PORT, () => {
  console.log("Server is running...");
});










