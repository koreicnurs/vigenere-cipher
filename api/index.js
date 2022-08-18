const express = require('express');
const app = express();
const port = '8001';
const cors = require('cors');

const Vigenere = require('caesar-salad').Vigenere;

app.use(express.json());
app.use(cors());

app.post('/encode', (req, res) => {
    // if(req.body.password && req.body.message) {
    const encode = Vigenere.Cipher(req.body.password).crypt(req.body.encode)
    res.send(encode);
    // }
});

app.post('/decode', (req, res) => {
    res.send(Vigenere.Decipher(req.body.password).crypt(req.body.message));
    const decode = Vigenere.Cipher(req.body.password).crypt(req.body.encode)
    res.send(decode);
});



app.listen(port, () => {
    console.log('We are live on  ' + port);
});