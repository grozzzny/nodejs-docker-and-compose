ARG NODE_VERSION=22.14.0

FROM node:$NODE_VERSION-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:$NODE_VERSION-alpine as production
WORKDIR /app

COPY --from=builder /app/dist/ /app/
COPY --from=builder /app/package.json /app/package.json
RUN yarn install --production=true

EXPOSE 3000
CMD [ "node", "main" ]
