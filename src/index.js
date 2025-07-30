const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverConfig');


const app = express();

const serverSetup = () => {
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: true}));

        app.listen(PORT, () => {
            console.log(`server is running at ${PORT}`)
        });
}

serverSetup();