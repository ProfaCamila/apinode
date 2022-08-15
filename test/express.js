const express = require('express')
const userModel = require('../src/database/models/user.model.js');

const app = express();
app.use(express.json());

app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send("<h1> Hello World, Camila </h1>");
});


app.get('/user', (req, res) => {
    const users = [
        {
            name: 'John Doe',
            email: 'john@doe.com'
        },
        {
            name: 'Jane Doe',
            email: 'jane@doe.com'
        },
    ];
    res.status(200).json(users)
});

app.get('/users', async (req, res) => {
    try {
        const users = await userModel.find({});
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/user', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json(user);
    }catch(error) {
        res.status(500).send(error.message);
    }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com express na porta: ${port}!`));