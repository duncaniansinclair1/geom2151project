FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
RUN npm install ol
RUN npm install parcel-bundler --save-dev

COPY . .
CMD npm start

EXPOSE 8081