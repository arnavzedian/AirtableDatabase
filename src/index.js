if (!process.env.PORT) require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/mainRouter");
const errorHandler = require("./middleware/errorHandler");

let corsOptions = {
  credentials: true,
};

app.use(cors(corsOptions));

app.use(morgan("tiny"));

app.use(express.json()); //body parser alternative

app.use(mainRouter);
app.use(errorHandler);

const port = process.env.PORT ? process.env.PORT : 8080;

app.listen(port, (err) => {
  console.log("App started on port: http://localhost:" + port);
});

process.on("uncaughtException", (err) => {
  console.log(err.message);
  console.error("Asynchronous error caught.", err);
});

process.on("unhandledRejection", (err) => {
  console.log(err.message);
  console.error("Asynchronous error caught.", err);
});
