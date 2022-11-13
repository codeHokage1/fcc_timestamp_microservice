// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();


// import useful packages
const getUnixTime = require('date-fns/getUnixTime');
const fromUnixTime = require('date-fns/fromUnixTime')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


// endpoint to send back currrent time
app.get("/api", (req, res) => {
  res.json({
    "unix": getUnixTime(new Date()),
    "utc": new Date().toUTCString()
  })
})


// endpoint tp convert the params date to the corresponding values
app.get("/api/:date", (req, res) => {
  if (req.params.date.includes('-')) {
    return res.json({
      "unix": getUnixTime(new Date(req.params.date)),
      "utc": new Date(req.params.date).toUTCString()
    })
  }
  res.json({
    "unix": Number(req.params.date),
    "utc": new Date(fromUnixTime(req.params.date)).toUTCString()
  })
  
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
