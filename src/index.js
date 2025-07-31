const express = require('express');
const bodyparser = require('body-parser');
const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');

const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controller');

const app = express();

const serverSetup = () => {
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: true}));

        app.post('/api/v1/tickets', TicketController.createTicket);

        app.listen(PORT, () => {
            console.log(`server is running at ${PORT}`);    

            // jobs();
            // sendBasicEmail(
            //     'support@admin.com',
            //     'kumarrajansingh49@gmail.com',
            //     'This is a testing email',
            //     'Hey, how are you, I hope you like the support'
            // );
            // cron.schedule('*/2 * * * * ',() => {
            //     console.log('running task on every two minutes');
            // });
        });
}   

serverSetup();

