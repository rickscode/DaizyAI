const express = require('express');
const openai = require('../middlewares/openai');
const {
  contentFilterCheck,
  sendResponse,
  saveToHistory,
} = require('./middleware');

let app = express.Router();

// app.use('/', initMiddleware, creditCheck);

app.use('/', require('./code/interpret'));
app.use('/', contentFilterCheck);
// app.use('/', creditPayment);
app.use('/', saveToHistory);
app.use('/', sendResponse);

app.use('/', require('./blogcontentai'));
app.use('/', contentFilterCheck);
// app.use('/', creditPayment);
app.use('/', saveToHistory);
app.use('/', sendResponse);

app.use('/', require('./socialmediacontent.js'));
app.use('/', contentFilterCheck);
// app.use('/', creditPayment);
app.use('/', saveToHistory);
app.use('/', sendResponse);

app.use('/', require('./imagegenerator'));
app.use('/', contentFilterCheck);
// app.use('/', creditPayment);
app.use('/', saveToHistory);
app.use('/', sendResponse);

app.use('/', require('./example'));
app.use('/', contentFilterCheck);
// app.use('/', creditPayment);
app.use('/', saveToHistory);
app.use('/', sendResponse);

module.exports = app;
