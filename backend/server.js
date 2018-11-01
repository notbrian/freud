const express = require('express');

const app = express();
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const bodyParser = require('body-parser');

const language = require('@google-cloud/language');

const admin = require('firebase-admin');
const serviceAccount = require('/Users/brian/Documents/Coding/speakeasy/backend/keys/freud-205314-firebase-adminsdk-9jz1p-c2d55e23d5.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://freud-205314.firebaseio.com',
});

const db = admin.database();

const client = new language.LanguageServiceClient();

const scoop = new VoiceResponse();
scoop.say(
  {
    voice: 'alice',
  },
  'Ye, how do you respond?',
);
scoop.play('https://raw.githubusercontent.com/notbrian/freud/feature/twilio/audio/scoopdiwoop.mp3');

const transcribe = new VoiceResponse();
transcribe.say({
    voice: 'male'
},'Hey this is your daily Freud session! How was your day?');
transcribe.record({
  transcribe: true,
  transcribeCallback: '/handle_transcribe',
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post('/scoop', (req, res) => {
  res.send(scoop.toString());
});

app.post('/recordDay', (req, res) => {
  res.send(transcribe.toString());
});

app.post('/handle_transcribe', (req, res) => {
  console.log(req.body.TranscriptionText);
  const transcribedText = req.body.TranscriptionText;

  const document = {
    content: transcribedText,
    type: 'PLAIN_TEXT',
  };
  client
    .analyzeEntitySentiment({ document })
    .then((results) => {
      const entities = results[0].entities;

      console.log('Entities and sentiments:');
      entities.forEach((entity) => {
        console.log(`  Name: ${entity.name}`);
        console.log(`  Type: ${entity.type}`);
        console.log(`  Score: ${entity.sentiment.score}`);
        console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
      });

      var processedEntities = entities.map((entity) => {
          return {
              name: entity.name,
              score: entity.sentiment.score
          }
      } )

      const path = (req.body.Called).split('+')[1];
      const currentDate = new Date();
      const sum = entities.reduce((acc, entity) => {
          return entity + acc
      }, 0)

      const avg = sum / entities.length

      

      let formattedDate = Date().slice(4, 10);

      let data =  [{
        date: formattedDate,
        text: transcribedText,
        processedEntities
      }]
      console.log(data)
      db
        .ref(`${path}/${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}/entries`)
        .set(data);
    })
    .catch((err) => {
      console.error('ERROR:', err);
    });
});

app.listen(1337, () => console.log('Example app listening on port 1337!'));
