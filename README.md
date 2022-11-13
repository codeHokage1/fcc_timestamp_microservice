# Timestamp Microservice

This is a project done in completion of my Backend & API development course on FreeCodeCamp. It simply returns several date responses depending on the requests.

Link to live API :link: : https://fcc-timestamp-microservice-one.vercel.app

```
GET / 
// displays the homepage

GET /api/hello
// returns a json response to say hello

GET /api
// returns a json response of the current date in its unix and utc equivalents

GET /api/yyyy-mm-dd
// returns a json response of the given date in its unix and utc equivalents

GET /api/xxxxxxxxxxx
// where xxxxxxxxxxx is a unix time, returns a json response of the given date in its unix and utc equivalents
```

:warning: **Note**: that the request parameter has to be in the correct date format: yyyy-MM-dd. Any format aside this, whic is also not a unix date equivalent would return an error message json

