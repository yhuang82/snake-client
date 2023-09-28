const net = require("net");
const { IP, PORT } = require("./constants");

// establishs a connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //print a message to the screen when the connection is successfully established
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    // Send the string name to server
    conn.write("Name: HYQ");
    // send the string move up
    
  });
 
 

  //interpret incoming data as text
  conn.setEncoding("utf-8");
  conn.on("data", (message) => {
    console.log("message: ", message);
  });

  return conn;
};

module.exports = { connect };
