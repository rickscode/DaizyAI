const OpenAI = require('openai-api');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

openai.OPENAI_API_KEY = OPENAI_API_KEY;

module.exports = openai;