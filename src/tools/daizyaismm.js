import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "DaizyAI Social Content Writer",
	desc: "AI Social Media Post Content",
	category: "Content",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-700",

	to: "/ai/daizyaismm",
	api: "/ai/daizyaismm",

	output: {
		title: "Social Media Post",
		desc: "🌟💰 SMART SAVING TIPS: Unleash Your Inner Money-Saving Guru! 💰🌟",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Please Enter A Topic",
		desc: "enter a topic you would like a social media post written for",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "Saving Money", 
				label: "",
				type: "textarea",
				maxLength: 350,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Saving Money ",
			},
		],
		example: {
			output: `Hey there, fellow budget-conscious friends! 💡 Are you constantly on the lookout for creative ways to stretch your hard-earned cash? 💸 Well, you're in luck! We've compiled some clever money-saving tips to help you make the most out of your financial journey. 🛣️✨

			1️⃣ TRACK YOUR EXPENSES 📊: It's crucial to know where your money is going. Start by keeping a record of your daily spending to gain a clearer understanding of your habits. This can help you identify areas where you can cut back or make adjustments. 🎯
			
			2️⃣ SET FINANCIAL GOALS 🎯: Whether you're saving for a dream vacation 🏖️, a down payment on a house 🏡, or an emergency fund 💼, having a specific goal in mind will keep you motivated and focused on your saving journey. 💪
			
			3️⃣ DIY YOUR WAY TO SAVINGS 🛠️: Channel your inner handyman (or woman) and tackle projects at home, such as cooking your meals 🍽️, fixing household items 🔧, and even upcycling old furniture ♻️. These small actions can lead to significant savings over time. 📈
			
			4️⃣ EMBRACE SECONDHAND SHOPPING 🛍️: Save big by shopping at thrift stores, garage sales, and online resale platforms like eBay and Facebook Marketplace. Not only will you score fantastic deals, but you'll also contribute to a more sustainable world. 🌎💚
			
			5️⃣ UTILIZE FREE RESOURCES 📚: Take advantage of free resources like public libraries, local events, and online tutorials to expand your knowledge and skills without breaking the bank. 🎉
			
			6️⃣ BE ENERGY-SMART 🌿: Cut your utility bills by adopting energy-saving practices like turning off unused electronics 🔌, using LED bulbs 💡, and investing in energy-efficient appliances 🌬️.
			
			7️⃣ NEGOTIATE AND COMPARE PRICES 💸: Don't be shy to haggle for better deals or compare prices when making significant purchases. A little research and negotiation can save you a considerable sum in the long run. 🕵️
			
			Remember, saving money is a journey, and every little bit counts! 💫 Start today and watch your savings grow. 🌱 Share your own money-saving tips in the comments and tag your friends who could use some inspiration! 🤑👇
			
			#SmartSavingTips #Budgeting #MoneySavingHacks #FrugalLiving #FinancialFreedom`,
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

