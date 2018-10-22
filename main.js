var express = require("express");
var app = express();

app.use("/fabricaarq", express.static("fabricaarq"));
app.use("/fabricaarq2", express.static("fabricaarq-2"));

app.listen(8000, function() {
  console.log("listening 8000");
});
