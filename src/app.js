const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const mongoSanitize = require("express-mongo-sanitize");
const pinoHttp = require("pino-http");

const logger = require("./utils/logger");
const { errorConverter, errorHandler } = require("./middlewares/error");
const routes = require("./routes");

const app = express();

app.use(
  pinoHttp({
    logger: logger,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mongoSanitize());
app.use(cors());
app.use(compression());

app.use(express.static("files"));
app.use(express.static(__dirname));

app.use("/api/v1", routes);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
