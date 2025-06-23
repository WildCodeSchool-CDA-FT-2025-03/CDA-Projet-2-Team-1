FROM node:22.15-alpine3.20 as dev
WORKDIR /app
COPY package.json package-lock.json* tsconfig.json jest.integration.config.ts ./
RUN npm install
CMD ["npm", "run", "dev"]

FROM node:22.15-alpine3.20 as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:22.15-alpine3.20 as prod
WORKDIR /app
COPY --from=build /app/dist/src ./dist
COPY package.json package-lock.json* ./
RUN npm install --production
CMD ["node", "./dist/index.js"]
