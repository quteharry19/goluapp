const express = require('express');
const fileUpload = require('express-fileupload');
const sqlite3 = require('sqlite3');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();

const db = new sqlite3.Database("/football/football.db");
