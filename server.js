const express = require('express');
const app = express();

// Middleware
const fileServerMiddleware = express.static('public');  //<<-- server from public directory

app.use('/', fileServerMiddleware);  // <<-- mount the middleware





app.listen(3000, function () {
	console.log('App Started on port 3000');
});






