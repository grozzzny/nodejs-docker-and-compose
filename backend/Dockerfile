ARG NODE_VERSION=22.14.0

FROM node:$NODE_VERSION-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:$NODE_VERSION-alpine as production
WORKDIR /app

RUN npm install -g pm2

COPY --from=builder /app/dist/ /app/
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/ecosystem.config.js /app/ecosystem.config.js
RUN yarn install --production=true

EXPOSE 3000
CMD ["pm2-runtime", "ecosystem.config.js"]
