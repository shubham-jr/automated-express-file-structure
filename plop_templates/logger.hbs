const pino = require("pino");

const streams = [
  { stream: process.stdout },
  { stream: pino.destination("app2.log") },
];

const pinoLogger = pino(
  {
    level: process.env.PINO_LOG_LEVEL || "info",

    formatters: {
      level: (label) => {
        return { level: label };
      },
    },
  },
  pino.multistream(streams)
);

module.exports = pinoLogger;
