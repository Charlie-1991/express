//exercise 1//
const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, function () {
  console.log(`Listening on port at http://localhost:${PORT}`);
});
//exercise 2//
app.get("/", (request, response) => {
  response.send("Hello World!");
});
