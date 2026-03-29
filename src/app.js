import express from "express";

console.log("STARTING APP...");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});