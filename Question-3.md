The JS file below has a few errors, can you indentify and fix them?

```js
const express = require('express'); // put quotes around express import
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');

/**
 * Assume that these are error free.
 */
const User = require('./models/user');
const logger = require('./utils/logger');

const mongoDB = process.env.MONGO_URI;

const app = express();


mongoose.Promise = global.Promise; // moved this above connection
mongoose.connect(mongoDB, { useMongoClient: true });

const db = mongoose.connection;

app.use(bodyParser.json());

// handler to save user
app.post('/save', function(req, res) { // change to app.post and set req before res

// destructure sample requests from request body
  const {firstName, email} = req.body;
  const user = new User({firstName, email});

  user.save(function(err) {
    if (err) {
      res.status(500).send(err);
      return logger.log(err);
    }
  });

  res.status(200).send('success');

  return res.json(user);
});

const server = http.createServer(app);

server.listen(80, function() {
  db.on('error', function(error) {
    logger.log(error);
  });
});
```
