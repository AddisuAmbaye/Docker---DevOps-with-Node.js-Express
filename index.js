const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from pros and devs</h1>')
})
PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})