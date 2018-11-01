// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC6501f96a0ee604f08b1031498b0d9edb';
const authToken = '11882d221a6477ff81c2bfa2895700f0';
const client = require('twilio')(accountSid, authToken);


client.calls
      .create({
         url: 'http://2716beff.ngrok.io/recordDay',
         to: '+16479977194‬',
         from: '+16479311161'
       })
      .then(call => console.log(call.sid))
      .done();

      