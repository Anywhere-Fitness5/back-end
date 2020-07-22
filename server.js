const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const usersRouter = require("./auth/auth-router");
const cookieParser = require("cookie-parser");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use(usersRouter);
server.use((err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    message: "Something went wrong",
  });
});
module.exports = server;
