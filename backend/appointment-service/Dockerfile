# Étape 1 : build
FROM node:22.15-alpine3.20 AS builder

# Crée le répertoire de travail
WORKDIR /opt/app

# Copie les fichiers de dépendances
COPY package.json package-lock.json* tsconfig.json ./

# Installation des dépendances
RUN npm install

FROM builder AS dev

ENTRYPOINT [ "npm", "run", "dev" ]
