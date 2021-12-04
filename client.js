const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",  // IP address here,
    port: 50541 // PORT number here,
  });

  console.log("Successfully connected to game server");

  // interpret incoming data as text
  conn.setEncoding("utf8");

  

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Hey! I am connected");
    conn.write("Name: RKV");
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");

    setTimeout(() => {
      conn.write("Move: up");
    }, 50);

    setTimeout(() => {
      conn.write("Move: left");
    }, 200);

  });  

  

  return conn;
};



module.exports = connect;