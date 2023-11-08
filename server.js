const express = require("express");
const app = express();

/***********/
/* .send() */
/***********/

// Text -> text/html
app.get("/send/text", (req, res) => {
  res.send("hello world");
});

// HTML -> text/html
app.get("/send/html", (req, res) => {
  res.send("<p>hello world</p>");
});

// JSON -> application/json
app.get("/send/json", (req, res) => {
  res.send({ hello: "world" });
});

/***********/
/* .json() */
/***********/

// JSON -> application/json
app.get("/json/json", (req, res) => {
  res.json({ hello: "world" });
});
// HTML -> application/json  -- this is strange
app.get("/json/html", (req, res) => {
  res.json("<p>hello world</p>");
});

/***********/
/* .end() */
/***********/

// Text --> No `Content-Type`  -- strange
app.get("/end/text", (req, res) => {
  res.end("hello world");
});

// HTML --> No `Content-Type`  -- strange, don't do this
app.get("/end/html", (req, res) => {
  res.end("<p>hello world</p>");
});

// JSON --> text/html  -- strange, don't do this
app.get("/end/json", (req, res) => {
  res.end({ hello: "world" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}.`);
});
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
