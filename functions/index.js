const admin= require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
//can't use export import

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://haaa-41acd.firebaseio.com"
});

exports.createUser= functions.https.onRequest(createUser);