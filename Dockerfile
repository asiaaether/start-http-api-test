FROM node:alpine as build-stage

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

CMD [ "npm", "test" ]