const express = require('express');
const axios = require('axios');
const openai = require('../middlewares/openai');
let app = express.Router()

app.post('/image/imagegenerator', async (req, res, next) => {
  try {
    let { content } = req.body

    let prompt = `Generate a stunning detailed and accurate image for the user from their instructions "${content}"\n\n` 

    

    const response = await axios.post('https://api.openai.com/v1/images/generations', {
      prompt,
      n: 1,
      size: "256x256",
    }, {
      headers: {
        'Authorization': `Bearer ${openai.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    let ouput = response.data.data.map(item => item.url).join("\n\n");
    
    console.log(ouput);

    req.locals.input = prompt
    req.locals.inputRaw = content
    req.locals.output = ouput

    next()

  } catch (err) {
    console.log('Error:', err.message);
    console.log('Error details:', err.response && err.response.data ? err.response.data : '');
  }
})

module.exports = app
