import {
	ClipboardListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "DaizyAI Social Content Writer",
	desc: "Create engaging written social media content",
	category: "Content",
	Icon: ClipboardListIcon,
	// tags: [],
	permissions: ['user'],

	to: "/ai/Content/socialmediacontent",
	api: "/ai/Content/socialmediacontent",
	
	fromColor: "blue-600",
	toColor: "yellow-500",

	output: {
		title: "Blog Post",
		desc: "",
		// Icon: RefreshIcon,
		// color: "",
	},

	
		prompts: [
			
				{
		title:"Daizy AI Social Media Writer",
		desc: "Create a unique social media post",
		// n: 1,
		prompts: [
			{ 
				title: "Enter Subject For You Social Media Post", 
				attr: "content",  
				value: "", 
				placeholder: "AI", 
				label: "",
				type: "textarea",
				maxLength: 200,
				// max: 100,
				// min: 1,
				required: true,
				error: "",
				example: "AI",
			},
		],
		example: {
output: `🚀🤖 The Future of AI Technology: Boundless Possibilities 🌌🧠

Hey, friends! As we venture further into the 21st century, I can't help but marvel at the extraordinary leaps in artificial intelligence (AI) technology. The rapid progress we've made is staggering, and it's clear that we're only at the dawn of a new age. 🌄

Imagine a world where AI-powered devices become our allies, enhancing our daily lives in unimaginable ways. From healthcare 🏥 to education 🎓, AI is already transforming industries, and its potential is limitless. Imagine personalized medical treatments, autonomous vehicles 🚗, and AI assistants guiding us through our day.

But let's also recognize the challenges that lie ahead. As AI becomes more advanced, ethical considerations, job displacement, and privacy concerns are vital issues to address. We must strive for a future where technology is developed responsibly, with human values at its core. 🌍🤲

So, let's embrace this exciting new frontier and work together to shape a future where AI technology brings out the best in humanity. As we dream big, let's remember that every step we take today will help determine the path we follow tomorrow. 🌟🔭

#ArtificialIntelligence #FutureTech #AIRevolution #Responsibility #Innovation #DreamBig`,
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

