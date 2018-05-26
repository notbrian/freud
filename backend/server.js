const express = require('express')
const app = express()
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const response = new VoiceResponse();
response.say('kill yourself');
response.play('https://api.twilio.com/Cowbell.mp3');


app.post('/response/kys', (req, res) => {
    res.send(response.toString())  
})


app.listen(1337, () => console.log('Example app listening on port 1337!'))