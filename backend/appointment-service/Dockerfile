FROM node:22.15-alpine3.20 AS dev
WORKDIR /app
COPY package.json package-lock.json* tsconfig.json ./
RUN npm install
COPY jest.integration.config.ts jest.integration.setup.ts ./
CMD ["npm", "run", "dev"]

FROM node:22.15-alpine3.20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:22.15-alpine3.20 AS prod
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package.json package-lock.json* ./
RUN npm install --production
CMD ["node", "dist/index.js"]
