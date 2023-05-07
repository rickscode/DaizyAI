import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "DaizyAI Writer",
	desc: "AI Journalist",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-700",

	to: "/ai/daizyaiwriter",
	api: "/ai/daizyaiwriter",

	output: {
		title: "Example Article",
		desc: "Discovering the Magic of Thailand: A Traveler's Guide",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Please Enter A Topic",
		desc: "enter the topic you would like an article or blog post written for",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Travelling In Thailand", 
				label: "",
				type: "textarea",
				maxLength: 350,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Travelling In Thailand ",
			},
		],
		example: {
			output: `Thailand, the Land of Smiles, is a Southeast Asian country known for its rich culture, breathtaking landscapes, and warm, welcoming people. As a destination that offers a diverse array of experiences, Thailand has something for every traveler. From the bustling streets of Bangkok to the serene beaches of Phuket, this tropical paradise promises a memorable journey. In this article, we will guide you through some essential tips for traveling in Thailand, as well as provide a helpful FAQs section at the end.

			A Taste of Thai Culture
			
		Thai culture is a unique blend of influences from various civilizations, including Indian, Chinese, and Khmer. Visitors can immerse themselves in this rich tapestry by exploring the country's many temples, such as the famous Wat Pho in Bangkok and Wat Rong Khun in Chiang Rai. Traditional Thai cuisine is another essential cultural experience, with dishes like pad Thai, green curry, and mango sticky rice being popular favorites.
			
			Exploring the Cities
			
		Bangkok, the bustling capital city of Thailand, is often the first stop for travelers. Known for its vibrant street life, fascinating cultural sites, and modern shopping centers, Bangkok offers a variety of experiences. Key attractions include the Grand Palace, home to the Emerald Buddha, and the lively Chatuchak Weekend Market. For a more relaxed pace, Chiang Mai in northern Thailand is a must-visit. This charming city is surrounded by lush mountains and is home to over 300 Buddhist temples, as well as a vibrant arts scene and delicious street food.
			
			Island Escapades
			
		Thailand's pristine beaches and stunning islands are a major draw for travelers. Phuket, the country's largest island, boasts picturesque beaches, a lively nightlife, and excellent snorkeling and scuba diving opportunities. For a more tranquil experience, consider visiting the idyllic islands of Koh Phi Phi, Koh Lanta, or Koh Samui. Each island has its unique charm and offers pristine beaches, crystal-clear waters, and opportunities for relaxation or adventure.
			
			The Great Outdoors
			
		Thailand's diverse landscapes provide countless opportunities for outdoor enthusiasts. From trekking through the lush jungles of Khao Sok National Park to exploring the ancient ruins of Ayutthaya, there's no shortage of adventures waiting to be discovered. For a truly unique experience, consider visiting the UNESCO World Heritage Site of Sukhothai, where you can explore the ruins of an ancient city on a bicycle.
			
			FAQs
			
		What is the best time to visit Thailand?
		The best time to visit Thailand is during the cool and dry season, which runs from November to February. However, if you're interested in visiting the islands, the weather varies depending on the location. For the Andaman Coast (Phuket, Krabi), the best time is from November to April, while for the Gulf Coast (Koh Samui), the best time is from January to August.
			
		What currency is used in Thailand?
		The Thai Baht (THB) is the official currency of Thailand. It is recommended to exchange your money at reputable banks, hotels, or authorized money changers. ATMs are widely available throughout the country, but be aware of potential fees when using foreign cards.`,
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj
