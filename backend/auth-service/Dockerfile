# Étape 1 : build
FROM node:22.15-alpine3.20

WORKDIR /app

# Copie des fichiers nécessaires
COPY package.json package-lock.json* tsconfig.json ./

# Installation des dépendances
RUN npm install


CMD [ "npm", "run", "dev" ]
