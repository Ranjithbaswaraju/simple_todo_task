const mongoose = require("mongoose");
const uri="mongodb+srv://ranjithbaswaraju10_db_user:8RORkTMzLw1dQ4g9@sampletodo.ciin6sz.mongodb.net/"

async function connectDB() {
  try {
    await mongoose.connect(url, {
      dbName: "MVC_Todo",
    });
    console.log("Database Connected");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { connectDB };
