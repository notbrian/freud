const express = require('express')
const app = express()
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require('body-parser')


const scoop = new VoiceResponse();
scoop.say('Ye, how do you respond?');
scoop.play('https://raw.githubusercontent.com/notbrian/freud/feature/twilio/audio/scoopdiwoop.mp3');

const transcribe = new VoiceResponse();
transcribe.say('ima record u lol')
transcribe.record({
    transcribe: true,
    transcribeCallback: '/handle_transcribe'
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/recordDay', (req, res) => {
    res.send(transcribe.toString())  
})

app.post('/handle_transcribe', (req, res) => {
    console.log(req.body);
    
})

app.post('/handle_transcribe', (req, res) => {
    console.log(req.body.TranscriptionTexts);
    
})

app.listen(1337, () => console.log('Example app listening on port 1337!'))