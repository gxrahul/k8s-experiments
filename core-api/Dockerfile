FROM node:8.11.2-alpine
WORKDIR /app
RUN apk add --no-cache git
COPY package*.json ./
RUN npm cache clear --force && npm i && npm i -g pm2
COPY . .
CMD npm run start:dev
