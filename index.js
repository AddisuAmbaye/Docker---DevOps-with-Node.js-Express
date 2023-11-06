const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hi there, addis</h1>')
})
PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})