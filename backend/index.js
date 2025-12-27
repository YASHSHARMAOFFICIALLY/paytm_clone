require("dotenv").config();
console.log("ENV CHECK:", process.env.MONGO_URL);

const express = require("express");
const mainRouter = require('./routes/index')
var cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());
app.use("/api/v1",mainRouter)
app.get("/", (req, res) => {
  res.send("Server is alive");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

