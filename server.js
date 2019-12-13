const express = require('express'),
    app = express(),
    port = 8000,
    path = require('path'),
    mongoose = require('mongoose'),
    server = app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.json());

app.use(express.static(__dirname + '/public/dist/public'));
require('./server/config/routes')(app);
require('./server/config/database');

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});