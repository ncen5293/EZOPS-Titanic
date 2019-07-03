FROM node:8.11.4

WORKDIR /api

COPY package*.json /api/

RUN npm install

COPY . /api/

EXPOSE 80
CMD [ "node", "server.js" ]
