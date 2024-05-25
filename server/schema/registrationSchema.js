/** @format */

const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNo: String,
  address: String,
  eventDate: String,
  eventTime: String,
  eventType: String,
});

module.exports = mongoose.model("booking", registrationSchema);
