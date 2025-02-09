import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  console.log("hello ");
  res.send("hey i am back");
});
app.get("/login", (req, res) => {
  console.log("hello ");
  res.send("hey i am back with login");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // log the server is running on the specified port
});
