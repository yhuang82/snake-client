const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
const clientConn = connect();

setupInput(clientConn);
