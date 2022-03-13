
const express = require('express');

//const config = require('./config');
const versions = ['v1', 'v2'];

const host = "127.0.0.1";
const port = 80;

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((request, response, next) => {

    console.log('%s %s', request.method, request.url);

    for (var i = 0; i < versions.length; i++) {
        try {
            console.log(versions[i]);
            app.use('/api/' + versions[i], require('./api/' + versions[i]));
        } catch (err) { console.log(err); }
    }
    next();
});

const server = app.listen(port, host, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port http://${server.address().address}:${server.address().port}`);
});
