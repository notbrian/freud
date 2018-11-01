
var admin = require("firebase-admin");


var serviceAccount = require("/Users/brian/Documents/Coding/speakeasy/backend/keys/freud-205314-firebase-adminsdk-9jz1p-c2d55e23d5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://freud-205314.firebaseio.com"
});

var db = admin.database();
let path = '+16479977194'.split('+')[1]
let currentDate = new Date
let transcribedText = 'my day was BAD'


db
        .ref(`${path}/${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}/entries`)
        .set({
          time: currentDate.getTime(),
          text: transcribedText,
          entities,
          avgSentiment,
        });

// db.ref(`${path}/${currentDate.getFullYear()}/${currentDate.getMonth()}/${currentDate.getDate()}/entries`).set(
//     {
//       time: currentDate.getTime(),
//       text: 'my day was bad',
//       entities: [
//         {
//           name: "food",
//           score: 0.9,
//         },
//         {
//           name: "everybody",
//           score: 0.5,
//         },
//       ],
//       sentiment: '-0.9',
//     }
//   );