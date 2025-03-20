// created mostly to play with dynatrace
import express from "express";
import OpenAI from "openai";
const app = express()
const port = 3000

app.get('/get_haiku', (req, res) => {
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

    completion.then((result) => {
        const openAIResponse = result.choices[0].message
        res.send(openAIResponse)
    }).catch((err) => {
        console.log(err);
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})