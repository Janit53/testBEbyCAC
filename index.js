const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.get('/twitter', (req, res) => {
    res.send("janitdotcom")
})
app.get('/login', (req,) => {
    res.send(`<h1> please login at chai aur code </h> `)
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})