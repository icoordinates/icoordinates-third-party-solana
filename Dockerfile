FROM node:19-alpine
RUN mkdir /app
RUN apk add --update git
WORKDIR /app
COPY package.json /app
RUN npm install -g npm@latest
RUN npm install
COPY . /app
