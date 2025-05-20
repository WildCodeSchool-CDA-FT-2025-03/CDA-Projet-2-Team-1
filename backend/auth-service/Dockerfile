# Étape 1 : build
FROM node:22.15-alpine3.20 AS builder

WORKDIR /opt/app

# Copie des fichiers nécessaires
COPY package.json package-lock.json* tsconfig.json .env.base .env.development .env.production ./

# Installation des dépendances
RUN npm install

FROM builder AS dev

ENTRYPOINT [ "npm", "run", "dev" ]
