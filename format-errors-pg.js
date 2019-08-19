module.exports = function (error) {
  // 1. error.stack.split("\n") returns something like ["error": "this is a descriptive error message.", "at Connection.parseE-1st  /       at Connection.parseMessage-2nd-occurrence / at Socket.<anonymous> path-1st-occurrence / at Socket.emit-2nd-occurrence / at          addChunk (_stream_readable.js:294:12)  /  at readableAddChunk (_stream_readable.js:275:11) / at Socket.Readable.push                (_stream_readable.js:210:10)\n / at TCP.onStreamRead (internal/stream_base_commons.js:166:17)"]

  // 2. next we grab the first array which is ["error": "this is a descriptive error message."]

  // 3. [0].split(":") bifurcates in to a key/value stored in an array like a tuple (sort of), so you end up with ["error":, "this is       a descriptive error message."]

  // 4. grab the data at position 1 which is ["this is a descriptive error message."]

  // 5. run a [1].trim() on this data, so we can get it to lose any extra white space from the beginning or end of the string.

  // 6. return the result "This is a descriptive error message." which should be easily understable by FEDs, and possibly even the          lay-person (your average Joe or your average Susie who has spent 20 years down at the cotton mill before learning to code           because all their jobs were shipped overseas.). 

  return error.stack.split("\n")[0].split(":")[1].trim();

}
