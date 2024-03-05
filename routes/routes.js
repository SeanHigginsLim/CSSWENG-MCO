const express = require('express');
const app = express();
const repairController = require('../controllers/repairController.js');
const importController = require('../controllers/importController.js');

// app.get('/index', importController.loadIndex)
app.get('/', importController.getMain);
app.post('/saveFile', importController.saveFile);
// app.get('/createSchema/:file', importController.uploadUserData);
// app.get('/uploadUserData/:file', importController.uploadUserData);

module.exports = app;