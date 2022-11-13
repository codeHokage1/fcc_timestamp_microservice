// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();


// import useful packages
const isMatch = require('date-fns/isMatch')

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
    "unix": new Date().getTime(),
    "utc": new Date().toUTCString()
  })
})


// endpoint tp convert the params date to the corresponding values
app.get("/api/:date", (req, res) => {
  try {
    if (req.params.date.includes('-')) {
      if (!isMatch(req.params.date, 'yyyy-MM-dd')) {
        return res.json({
          "error": "invalid Date"
        })
      } else {
        return res.json({
          "unix": new Date(req.params.date).getTime(),
          "utc": new Date(req.params.date).toUTCString()
        })
      }
    }
    res.json({
      // "unix": new Date(Number(req.params.date)).getTime(),
      "unix": Number(req.params.date),
      "utc": new Date(Number(req.params.date)).toUTCString()
    })
  } catch (error) {
    res.status(500).json({
      "error": error.message
    })
  }
})






// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
