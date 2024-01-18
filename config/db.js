const { database } = require("./config");

module.exports = {
  development: {
    username: database.username,
    password: database.password,
    database: database.name,
    host: database.host,
    port: database.port,
    dialect: "mysql",
  },
};
