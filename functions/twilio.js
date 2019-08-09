const twilio = require('twilio');

const accountSid ='AC0a127ca4691f114de098534e9e52a226';
const authToken ='ae81a868789f5cc5d69ba0ddce54eac1';

module.exports = new twilio.Twilio(accountSid,authToken);