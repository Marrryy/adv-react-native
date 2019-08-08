const admin= require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const requestOneTimePasswords= require('./req_one_time_pass');
const verifyOneTimePasswords= require('./verify_one_time_pass');
const serviceAccount = require('./service_account.json');
//can't use export import

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://haaa-41acd.firebaseio.com"
});

exports.createUser= functions.https.onRequest(createUser);
exports.requestOneTimePasswords= functions.https.onRequest(requestOneTimePasswords);
exports.verifyOneTimePasswords= functions.https.onRequest(verifyOneTimePasswords);