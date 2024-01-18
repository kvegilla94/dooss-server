const express = require("express");
const app = express();
const { server } = require("../config/config");
const router = require("./routes");

app.use(express.json());
app.use("/", router);

app.listen(server.port, () => console.log(`Listening on port ${server.port}`));
