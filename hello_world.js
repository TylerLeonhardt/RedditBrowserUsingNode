//web.js
var express = require("express"),
    logfmt = require("logfmt"),
    app = express(),
    port;

app.use(logfmt.requestLogger());

app.get('/', function (req, res) {
    res.send('Hello World');
});

port = Number(process.env.PORT || 5000);
app.listen(port, function () {
    console.log("Listening on " + port);
});