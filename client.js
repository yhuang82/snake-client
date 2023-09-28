const net = require("net");

// establishs a connection with game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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