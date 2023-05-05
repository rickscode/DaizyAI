const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
};
  
const prod = {
	baseURL: '/api/',
	landingPageUrl: "https://app.openaitemplate.com",
};
  
const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;
  
export default config;