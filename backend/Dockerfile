FROM node:lts AS builder

COPY  backend/ .

RUN npm ci
RUN npm run build

FROM node:lts

COPY --from=builder /dist ./dist
COPY --from=builder /node_modules ./node_modules

CMD [ "node", "./dist/server.js" ]
