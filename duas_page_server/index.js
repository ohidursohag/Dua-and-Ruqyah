const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;
const app = express();

// Middlewears
const corsOptions = {
   origin: ["http://localhost:3000"],
   credentials: true,
 };
 app.use(cors(corsOptions));
 app.use(express.json());
 app.use(bodyParser.json())



 app.get("/", (req, res) => {
   res.send("Hello from Dua & Ruqyah Server..");
 });
 
 app.listen(port, () => {
   console.log(`Advisoropedia is running on port ${port}`);
 });