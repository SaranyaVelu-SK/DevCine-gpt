import OpenAI from 'openai';

const key = import.meta.env.VITE_OPENAI_KEY;
const client = new OpenAI({
  apiKey: key,
  dangerouslyAllowBrowser: true   //to overcome openAI error
});

export default client;