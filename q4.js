const express = require("express");
const app = express();
const PORT = 5940;
const HOSTNAME = 'localhost';
let random;

function randomNum(){
    let random_no = Math.floor(Math.random() * 100);
    return random_no;
}

app.get('/random', (req, res) => {
    random = randomNum()
    res.send(JSON.stringify({random: random}));
});

app.listen(PORT, () => {
    console.log(`Server running on ${HOSTNAME}:${PORT}`);
});