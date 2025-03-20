FROM node
WORKDIR /
RUN npm install
CMD ["node","server.js"]