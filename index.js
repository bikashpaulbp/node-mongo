const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

const name = ['suhana', 'karim', 'rahim', 'jodu', 'rodu', 'fodu', 'hobu', 'luku'];

app.get('/', (req, res) => {
    res.send('Thank you for calling me')
})

app.get('/abaal/:id', (req, res) => {
    const id = req.params.id;
    const user = name[id];
    res.send({id, user})
})


app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 7;
    res.send(req.body)
})

app.listen(3000, () => console.log("Listening to port 3000"))