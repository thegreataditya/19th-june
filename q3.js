const express = require("express");
const app = express();
const PORT = 5930;
const HOSTNAME = 'localhost';

app.get('/', (req, res) => {
    res.send(JSON.stringify({msg : "I am homepage"}));
});

app.get('/about', (req, res) => {
    res.send(JSON.stringify({msg : "I am about page"}));
});

app.get('/contact', (req, res) => {
    res.send(JSON.stringify({email:'suppor#@pwskills.com'}));
});

app.listen(PORT, () => {
    console.log(`Server running on ${HOSTNAME}:${PORT}`);
});