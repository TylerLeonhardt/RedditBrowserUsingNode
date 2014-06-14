//web.js
var express = require("express"),
    logfmt = require("logfmt"),
    restler = require('restler'),
    app = express(),
    port;

app.use(logfmt.requestLogger());

app.all('/', function (req, res) {
    restler.get('http://reddit.com/.json').on('complete', function(reddit) {
        var titles = "<Response>";
        for(var i=0; i<5; i++){
            titles += "<sms>" + reddit.data.children[i].data.title + "</sms>";
        }
        titles += "</Response>"
        res.send(titles);
    });
});

port = Number(process.env.PORT || 5000);
app.listen(port, function () {
    console.log("Listening on " + port);
});