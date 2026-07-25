const express = require("express");
const cors = require("cors");
require("dotenv").config();

const analyseRoute = require("./routes/analyse");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", analyseRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});