const formatErrPG = require("./format-errors-pg");

const errors = {
  date: "8/19/2019",
  time: "12:15:15 PM",
  error: {
    stack: "error: value too long for type character varying(15)\n    at Connection.parseE (/Users/br/Desktop/virtual-desktop/Work/app-backend-sw/node_modules/pg/lib/connection.js:604:11)\n    at Connection.parseMessage (/Users/br/Desktop/virtual-desktop/Work/app-backend-sw/node_modules/pg/lib/connection.js:401:19)\n    at Socket.<anonymous> (/Users/br/Desktop/virtual-desktop/Work/app-backend-sw/node_modules/pg/lib/connection.js:121:22)\n    at Socket.emit (events.js:203:13)\n    at addChunk (_stream_readable.js:294:12)\n    at readableAddChunk (_stream_readable.js:275:11)\n    at Socket.Readable.push (_stream_readable.js:210:10)\n    at TCP.onStreamRead (internal/stream_base_commons.js:166:17)",
    name: "error",
    length: 98,
    severity: "ERROR",
    code: "22001",
    file: "varchar.c",
    line: "624",
    routine: "varchar"
  }
}

console.log("\n" + formatErrPG(errors.error) + "\n");