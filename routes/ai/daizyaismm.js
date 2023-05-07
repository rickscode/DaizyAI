
const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/daizyaismm', async (req, res, next) => {
	try {
		let { content } = req.body
  
	let prompt = `Create a 250-word social media post on the topic of ${content} based on the following example post\n\n` +
	"Example Topic: Fure of AI\n" +
	"Example  Post:\n" +
	"🚀🤖 The Future of AI Technology: Boundless Possibilities 🌌🧠\n" +
	"Hey, friends! As we venture further into the 21st century, I can't help but marvel at the extraordinary leaps in artificial intelligence (AI) technology. The rapid progress we've made is staggering, and it's clear that we're only at the dawn of a new age. 🌄\n\nImagine a world where AI-powered devices become our allies, enhancing our daily lives in unimaginable ways. From healthcare 🏥 to education 🎓, AI is already transforming industries, and its potential is limitless. Imagine personalized medical treatments, autonomous vehicles 🚗, and AI assistants guiding us through our day.\n\nBut let's also recognize the challenges that lie ahead. As AI becomes more advanced, ethical considerations, job displacement, and privacy concerns are vital issues to address. We must strive for a future where technology is developed responsibly, with human values at its core. 🌍🤲\n\nSo, let's embrace this exciting new frontier and work together to shape a future where AI technology brings out the best in humanity. As we dream big, let's remember that every step we take today will help determine the path we follow tomorrow. 🌟🔭\n\n#ArtificialIntelligence #FutureTech #AIRevolution #Responsibility #Innovation #DreamBig" +
	"Example Topic: The Power of Living Below Your Means\n" +
	"Example  Post:\n" +
	"💰🔐 The Power of Living Below Your Means: Unlocking Financial Freedom 🌱🌟\n" +
	"Hey, friends! As we work towards creating a brighter future, one essential lesson we can all learn is the importance of living below our means. By embracing a lifestyle of financial mindfulness, we pave the way for long-lasting financial freedom. 🗝️🚪\n\nImagine the peace of mind that comes from knowing you have the resources to handle unexpected expenses, invest in your dreams, and secure your retirement. This all starts with a conscious decision to spend less than you earn. 💸✅\n\nBegin by creating a budget that reflects your financial priorities and stick to it. Emphasize the difference between needs and wants, and cultivate gratitude for what you already have. Learn to value experiences over material possessions, and find joy in simplicity. 🌿🏡\n\nHowever, this doesn't mean you should deprive yourself! Seek out creative ways to enjoy life while maintaining your financial goals. Explore free and low-cost activities, and remember that quality time with loved ones is priceless. 💕🌳\n\nAs you continue to live below your means, you'll find that you're building a solid foundation for financial freedom. Let's empower ourselves and each other to take control of our financial futures and create a world where we can all thrive. 🌍🌈\n\n#FinancialFreedom #LivingBelowYourMeans #Budgeting #Simplicity #Empowerment #FinancialGoals"

	let inputRaw = `${content}` // here is where people enter stuff
	prompt += inputRaw

	const gptResponse = await openai.complete({
		engine: 'text-davinci-003',
		prompt,
		maxTokens: 350,
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