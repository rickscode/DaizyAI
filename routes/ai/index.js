
const express = require('express');
const openai = require('../middlewares/openai');
const { 
	initMiddleware,
	creditCheck,
	contentFilterCheck,
	sendResponse,
	creditPayment,
	saveToHistory,
}  = require('./middleware');

let app = express.Router()

app.use('/', initMiddleware, creditCheck); 

app.use('/', require('./helloworld'));
app.use('/', require('./daizyaiwriter'));
app.use('/', require('./imagegenerator'));
app.use('/', require('./daizyaismm'));


app.use('/', contentFilterCheck); 
app.use('/', creditPayment); 
app.use('/', saveToHistory); 

app.use('/', sendResponse); 

module.exports = app