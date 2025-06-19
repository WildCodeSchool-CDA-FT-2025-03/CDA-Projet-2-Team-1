import { createLogger, format, transports } from 'winston';

const toText = format.printf(({ timestamp, message, level }) => {
  return `${timestamp} [${level}] ${JSON.stringify(message)}`;
});

const loggerTransporter = [];

loggerTransporter.push(
  new transports.Console({
    format: format.combine(format.timestamp(), toText),
  })
);

const logger = createLogger({
  transports: loggerTransporter,
});

export default logger;
