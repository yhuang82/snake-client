const net = require("net");

// establishs a connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  //print a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    // Send the string name to server
    conn.write("Name: HYQ");
  });
 
 

  //interpret incoming data as text
  conn.setEncoding("utf-8");
  conn.on("data", (message) => {
    console.log("message: ", message);
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
