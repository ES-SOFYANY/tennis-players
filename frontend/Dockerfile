FROM node:lts AS builder

COPY frontend/ .

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
