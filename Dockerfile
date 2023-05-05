FROM node:18-alpine 

WORKDIR /usr/app

COPY ./package.json ./

RUN npm install --fetch-timeout=600000

COPY . .

RUN [ "npm","start" ]


