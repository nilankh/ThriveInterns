const express = require("express");
const connectDB = require("./config/db");

// Create express app
const app = express();

// Connect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Thrive Interns" });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
