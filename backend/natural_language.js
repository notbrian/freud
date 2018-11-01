// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Instantiates a client
const client = new language.LanguageServiceClient();

// The text to analyze
const text = 'I had a bad day because my bagel was burnt but I really liked my donut!';

const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects the sentiment of the text
client
  .analyzeEntitySentiment({document: document})
  .then(results => {
    const entities = results[0].entities;

    console.log(`Entities and sentiments:`);
    entities.forEach(entity => {
      console.log(`  Name: ${entity.name}`);
      console.log(`  Type: ${entity.type}`);
      console.log(`  Score: ${entity.sentiment.score}`);
      console.log(`  Magnitude: ${entity.sentiment.magnitude}`);
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });