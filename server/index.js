/** @format */

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const form = require("./routes/form");

const PORT = process.env.PORT || 9000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

require("./db/config");

app.use("/", form);
app.listen(PORT, () => console.log("Be started"));
