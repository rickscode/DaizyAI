const express = require('express');
const openai = require('../middlewares/openai');

let app = express.Router()

app.post('/Content/blogcontentai', async (req, res, next) => {
  try {
    let { content } = req.body

    // Add your prompt content here

	let prompt = `Write a 700-word blog post about "${content}". Include an FAQs section at the end. Here is an example of a blog post:\n\n` 
	// "Example Topic: Climate Change\n" +
	// "Example Blog Post:\n" +
	// "Climate Change: The Defining Issue of Our Time\n" +
	// "Climate change is the defining issue of our time, and its consequences are becoming more evident and devastating with each passing day. The evidence is overwhelming: temperatures are rising, ice sheets are melting, and extreme weather events are becoming more frequent and severe. This blog post aims to provide a comprehensive overview of climate change, its causes, and potential solutions, along with an FAQ section at the end to address some common questions.\n\nUnderstanding Climate Change:\n\nClimate change refers to long-term changes in the Earth's climate system, which includes the atmosphere, land, oceans, and ice sheets. The primary cause of climate change is the increase in greenhouse gases (GHGs) in the atmosphere, mainly due to human activities such as burning fossil fuels, deforestation, and industrial processes. These GHGs, such as carbon dioxide, methane, and nitrous oxide, trap heat in the Earth's atmosphere, leading to a phenomenon known as the greenhouse effect. This increase in heat results in a wide range of impacts on the Earth's climate system.\n1. Temperature Rise: The global average temperature has increased by approximately 1.2°C since the pre-industrial era (1850-1900). This may not seem like a significant change, but even small increases in temperature can lead to profound and far-reaching effects on the Earth's climate system.\n2. Melting Ice and Rising Sea Levels: The warming temperatures are causing ice sheets and glaciers to melt at an accelerated pace, leading to rising sea levels. This poses a significant threat to coastal communities and low-lying islands, which are at risk of flooding and displacement.\n3. Extreme Weather Events: Climate change is also linked to an increase in the frequency and intensity of extreme weather events such as heatwaves, droughts, floods, and storms. These events can have disastrous consequences, including loss of life, damage to infrastructure, and disruption to agriculture and food supply.\n4. Biodiversity Loss: The changing climate conditions are causing shifts in ecosystems, leading to the extinction of many plant and animal species. This loss of biodiversity has far-reaching consequences, as it disrupts the delicate balance of ecosystems and threatens the resources humans depend on for survival.\n5. Ocean Acidification: The increased concentration of carbon dioxide in the atmosphere is causing the oceans to become more acidic. This has a detrimental effect on marine life, especially organisms with calcium carbonate shells, such as coral reefs and shellfish.\n\nAddressing Climate Change\n\nTo mitigate the impacts of climate change, we must take urgent action to reduce GHG emissions and transition to more sustainable practices. Some key approaches include:\n\n1. Renewable Energy: Transitioning from fossil fuels to renewable energy sources, such as solar, wind, and hydro power, can significantly reduce GHG emissions.\n2. Energy Efficiency: Improving energy efficiency in buildings, transportation, and industry can help to reduce overall energy consumption and associated emissions.\n3. Reforestation and Sustainable Land Management: Planting trees and managing land sustainably can help to remove carbon dioxide from the atmosphere, reducing the overall concentration of GHGs.\n4. Carbon Pricing: Implementing carbon pricing, such as cap-and-trade systems or carbon taxes, can incentivize businesses to reduce their emissions by putting a price on carbon emissions.\n5. Climate Adaptation: As some impacts of climate change are already inevitable, it is essential to invest in adaptation measures, such as improving infrastructure and early warning systems, to minimize the damage caused by extreme weather events and other climate-related impacts.\n\n FAQS\n\n1. What is climate change?\n\nClimate change refers to long-term changes in the Earth's climate, including alterations in temperature, precipitation, and other atmospheric conditions. While the Earth's climate has always experienced natural fluctuations, the rapid changes observed today are primarily due to human activities that release greenhouse gases into the atmosphere.\n\n2. What are the main greenhouse gases responsible for climate change?\n\nThe main greenhouse gases responsible for climate change are carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O). These gases trap heat in the Earth's atmosphere, causing global temperatures to rise and altering climate patterns.\n\n3. What are the main greenhouse gases responsible for climate change?.\n\nThe main greenhouse gases responsible for climate change are carbon dioxide (CO2), methane (CH4), and nitrous oxide (N2O). These gases trap heat in the Earth's atmosphere, causing global temperatures to rise and altering climate patterns.\n\n4. What can we do to combat climate change?\n\nCombating climate change requires urgent action from individuals, businesses, and governments. Key strategies include reducing greenhouse gas emissions through transitioning to renewable energy sources, improving energy efficiency, investing in innovative technologies, and developing strategies to adapt to the impacts of climate change.\n\nIndividuals can contribute to fighting climate change by reducing their own greenhouse gas emissions through actions such as conserving energy, using public transportation or electric vehicles, eating a plant-based diet, and advocating for climate-friendly policies. Additionally, individuals can support organizations working to address climate change, stay informed on the issue, and vote for leaders who prioritize climate action." +
	// `Topic: ${content}\n` +
	// "Blog Post:\n";


		let inputRaw = `${content}` // here is where people enter stuff
		// prompt += inputRaw
	
		const gptResponse = await openai.complete({
			engine: 'text-davinci-003',
			prompt,
			maxTokens: 800,
			temperature: 1,
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

		console.log(output);
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


// const express = require('express');
// const openai = require('../middlewares/openai');

// let app = express.Router()

// app.post('/Content/blogcontentai', async (req, res, next) => {
//   try {
//     let { content } = req.body

//     // Generate the main content
//     let prompt = `Write a blog post about "${content}".\n\n`;
//     let gptResponse = await openai.complete({
//         engine: 'text-davinci-003',
//         prompt,
//         maxTokens: 550,
//         temperature: 0.7,
//         topP: 1,
//         frequencyPenalty: 0,
//         presencePenalty: 0,
//         bestOf: 1,
//         n: 1,
//         user: req.user._id,
//         stream: false,
//         stop: ["\n\n"],
//     });

//     let output = `${gptResponse.data.choices[0].text}`

//     // Generate the FAQs section
//     prompt = `Create an FAQs section related to "${content}".\n\n`;
//     gptResponse = await openai.complete({
//         engine: 'text-davinci-003',
//         prompt,
//         maxTokens: 150,
//         temperature: 0.7,
//         topP: 1,
//         frequencyPenalty: 0,
//         presencePenalty: 0,
//         bestOf: 1,
//         n: 1,
//         user: req.user._id,
//         stream: false,
//         stop: ["\n\n"],
//     });

//     output += `\nFAQs:\n${gptResponse.data.choices[0].text}`;

//     console.log(output);
//     req.locals.input = prompt
//     req.locals.inputRaw = content
//     req.locals.output = output

//     next()

//   } catch (err) {
//     console.log(err.response)
//     console.log(err.data)
//     console.log(err.message)
//   }

// })

// module.exports = app

