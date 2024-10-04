const express = require("express");
const app = express();

app.get("/", (req, res) => {
  throw new Error("Missing required field: requiredField");
} );

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
 