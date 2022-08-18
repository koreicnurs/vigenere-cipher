const express = require('express');
const app = express();
const port = '8001';
const cors = require('cors');

const Vigenere = require('caesar-salad').Vigenere;

app.use(express.json());
app.use(cors());

app.post('/encode', (req, res) => {
    if(!req.body.password || !req.body.encode) {
        res.status(400).send('Dont Valid');
    }

    const encode = Vigenere.Cipher(req.body.password).crypt(req.body.encode)
    res.send(encode);
});

app.post('/decode', (req, res) => {
    if(!req.body.password || !req.body.decode) {
        res.status(400).send('Dont Valid');
    }

    const decode = (Vigenere.Decipher(req.body.password).crypt(req.body.decode))
    res.send(decode);
});

app.listen(port, () => {
    console.log('We are live on  ' + port);
});