#pre prequisites:
need to have CHAT_GPT_API set to openai key to app

docker build -t node-application .
docker run -e CHAT_GPT_API=$CHAT_GPT_API -p 3000:3000 node-application
http://localhost:3000/get_haiku

docker stop <hash>