import OpenAI from "openai";
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./keys.json'))

const openai = new OpenAI({
  apiKey: keys.key_1,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {
    "role": "user", 
     "content": "how big is the probablitlity of Russia invading Poland in the next 5 years"
    },
  ],
});

completion.then((result) => console.log(result.choices[0].message));