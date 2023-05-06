const express = require('express');

const app = express();
const path = require('path');

const https = require('https');
const fs = require('fs');
const formidable = require('formidable');


app.use(express.static('./build'));


const options = {
    cert: fs.readFileSync('/etc/letsencrypt/live/altapet.com/fullchain.pem'),
    key: fs.readFileSync('/etc/letsencrypt/live/altapet.com/privkey.pem')
};


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
});


https.createServer(options, app).listen(443, err => {
        if (err) throw err;
        console.log('listening on port 443')
});