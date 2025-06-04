# Étape 1 : build
FROM node:22.15-alpine3.20 AS builder

WORKDIR /app

# Copie des fichiers nécessaires
COPY package.json package-lock.json* tsconfig.json ./

# Installation des dépendances
RUN npm install

FROM builder AS dev

ENTRYPOINT [ "npm", "run", "dev" ]
