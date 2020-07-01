FROM node:erbium-alpine as base

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

# -- STAGE: PROD --------------------------------------------------------------

FROM node:erbium-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production

COPY . .

CMD ["yarn", "start"]
