const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Serve data folder
app.use("/data", express.static(path.join(__dirname, "data")));

// Root route -> send index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log("GangerProps.ai running on port", PORT);
});
