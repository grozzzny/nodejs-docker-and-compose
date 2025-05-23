ARG NODE_VERSION=16

FROM node:$NODE_VERSION-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build


FROM nginx:latest as production
WORKDIR /app

COPY --from=builder /app/build/ /app/
COPY --from=builder /app/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
