const { request, response } = require('express');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 8000;

const rappers = {
    '21 savage': {
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'age': 29,
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase();
    if (rappers[rapperName]) {
        res.json(rappers[rapperName]);
    }
    else {
        res.json(rappers['unknown']);
    };
});

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}! Better go catch it!`);
});