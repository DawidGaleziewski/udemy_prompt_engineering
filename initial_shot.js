import OpenAI from "openai";
import * as fs from 'fs';
import {salvadorDaliStyleDoors} from "./prompts/1_lerning.js";

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_API,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {
    "role": "user",
     "content": salvadorDaliStyleDoors(),
    },
  ],
});

completion.then((result) => console.log(result.choices[0].message));