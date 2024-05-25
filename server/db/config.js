/** @format */

const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);
// mongoose.set('useFindAndModify', false);
console.log(DATABASE);
mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));
