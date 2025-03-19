import OpenAI from "openai";
import {steveJobsStyleDoors} from "./prompts/1_lerning.js";

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_API,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {
    "role": "user",
    "content": "Write a joke, use word Quixotic at least 1 times in it"
    //  "content": steveJobsStyleDoors(),
    },
  ],
});

completion.then((result) => console.log(result.choices[0].message));