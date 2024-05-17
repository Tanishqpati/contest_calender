const express = require('express');
const { google } = require('googleapis');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/googleCredentials.json')));

const oAuth2Client = new google.auth.OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    process.env.GOOGLE_REDIRECT_URI
);

module.exports = router;