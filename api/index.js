const express = require('express');
const app = express();
const port = '8000';

const Vigenere = require('caesar-salad').Vigenere;

const password = 'hello';

app.get('/encode/:name', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.name));
});

app.get('/decode/:name', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.name));
});

app.listen(port, () => {
    console.log('We are live on  ' + port);
});