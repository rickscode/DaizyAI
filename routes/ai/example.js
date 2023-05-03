
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/example', async (req, res, next) => {
	try {
		let { content } = req.body
  
	let prompt = `Explain the topic ${content} in 100 words`
	// `1. Explain what the topic is, why it is important, and any relevant history or background information.\n\n` +
	//  `2. Discuss the current state of the topic, including any recent developments, challenges, or controversies.\n\n` +
	//  `3. Offer your own perspective or analysis on the topic, supported by credible sources and evidence.\n\n` +
	//  `Use a clear and sophisticated style appropriate for an adult audience, and aim to engage and inform your readers with your writing.\n\n###`

	let inputRaw = `${content}` // here is where people enter stuff
	prompt += inputRaw

	const gptResponse = await openai.complete({
		engine: 'davinci',
		prompt,
		maxTokens: 700,
		temperature: 0.1,
		topP: 1,
		frequencyPenalty: 1,
		presencePenalty: 0,
		bestOf: 1,
		n: 1,
		user: req.user._id,
		stream: false,
		stop: ["###", "<|endoftext|>", ],
	});

	let output = `${gptResponse.data.choices[0].text}`

	// remove the first character from output
	output = output.substring(1, output.length)

	// If the output string ends with one or more hashtags, remove all of them
	if (output.endsWith('"')) {
		output = output.substring(0, output.length - 1)
	}

	// If the output string ends with one or more hashtags, remove all of them
	if (output.endsWith('"')) {
		output = output.substring(0, output.length - 1)
	}

	// remove a single new line at the end of output if there is one
	if (output.endsWith('\n')) {
		output = output.substring(0, output.length - 1)
	}

	req.locals.input = prompt
	req.locals.inputRaw = inputRaw
	req.locals.output = output

	next()

	} catch (err){
		console.log(err.response)
		console.log(err.data)
		console.log(err.message)
	}
	
  })

module.exports = app