const express = require('express'),
      app = express(),
      blockChainController = require('./controllers/blockChainController'),
      port = process.env.PORT || 8000;


blockChainController(app);

app.listen(port),() => console.log(`server run in ${port}`);
