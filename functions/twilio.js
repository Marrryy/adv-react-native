const twilio = require('twilio');

const accountSid ='AC0a127ca4691f114de098534e9e52a226';
const authToken ='8edb77cdf81cd83b9b0007e04765cf72';

module.exports = new twilio.Twilio(accountSid,authToken);