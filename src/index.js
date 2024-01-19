const express = require("express");
const cors = require("cors");
const { server } = require("../config/config");
const app = express();
const router = require("./routes");

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(server.port, () => console.log(`Listening on port ${server.port}`));
