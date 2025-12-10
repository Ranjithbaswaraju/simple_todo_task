const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config();
// console.log(process.env.monoDb_url)
const uri=process.env.monoDb_url
async function connectDB() {
  try {
    await mongoose.connect(uri, {
      dbName: "MVC_Todo",
    });
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectDB };
