// Stores the active TCP connection object.
let connection = undefined;
// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    // Ctrl + C was pressed
    console.log("Exiting game.");
    process.exit();
  }
  if (!connection.writable) {
    console.log("Connection has been closed.");
    process.exit();
  }
  if (key === "\u001b[B") {
    connection.write("Move: down");
  }
  if (key === "\u001b[D") {
    connection.write("Move: left");
  }
  if (key === "\u001b[C") {
    connection.write("Move: right");
  }
  if (key === "\u001b[A") {
    connection.write("Move: up");
  }
};

module.exports = { setupInput };
