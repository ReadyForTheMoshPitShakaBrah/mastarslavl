var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.post('/authenticate', function(req, res) {
    //TODO validate req.body.username and req.body.password
    //if is invalid, return 401
    if (!(req.body.username === 'osipov' && req.body.password === '8922233')) {
        console.log('success');
        res.status(401).send('Wrong user or password');
        return;
    }

    var profile = {
        first_name: 'Osipov',
        last_name: 'Victor',
        email: 'osipovdev@gmail.com',
        id: 123
    };

    res.json({
        userstat: 'authed'
    });
});

app.get('/api/restricted', function (req, res) {
  console.log('user is calling /api/restricted');
  res.json({
    name: 'foo'
  });
});

app.listen(8080, function() {
    console.log('listening on http://localhost:8080');
});
