const cron = require('node-cron');
const emailService = require('../services/email-service');

/**
 * 10:00 am
 * Every 5 minutes
 * We will check are their any pending emails which was expected to be sent 
 * by now and is pending
 */

const setUpJobs = () => {
    cron.schedule('*/5 * * * * ', async () => {
        const response = await emailService.fetchPendingEmails();
        console.log(response);
    });
}

module.exports = setUpJobs;

