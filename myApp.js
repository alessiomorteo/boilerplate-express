let express = require('express');
let app = express();

/*
app.get('/', (req, res) => {
    res.send('Hello Express');
})
*/
// see this using port 3000 at http://localhost:3000

app.get('/', (req, res) => {
    let absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
}) // serve the index.html file using res.sendFile method





































 module.exports = app;
