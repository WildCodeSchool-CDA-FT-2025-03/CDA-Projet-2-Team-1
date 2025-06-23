FROM node:lts-alpine AS dev
WORKDIR /app
COPY *.json *.ts *.js index.html ./
COPY public/ public/
RUN npm install
CMD ["npm", "run", "dev"]

FROM node:lts-alpine AS preview
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "run", "preview"]
