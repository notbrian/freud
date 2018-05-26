
var admin = require("firebase-admin");

var serviceAccount = require("/Users/brian/Documents/Coding/speakeasy/backend/freud-205314-firebase-adminsdk-9jz1p-c2d55e23d5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://freud-205314.firebaseio.com"
});
