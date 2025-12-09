const express = require("express");
const app = express();
const allData = require("./routes/todoRoutes.js");
const { connectDB } = require("./db_configure/db.js");
const cors=require('cors')

connectDB();
app.use(express.json());
app.use(express.urlencoded());


//cors middleware

app.use(cors({
    origin:["https://todos-cors.vercel.app/","http://localhost:5173"]
}))


app.use("/api/todos", allData);

app.listen(3000, () => console.log("server started at :3000"));


