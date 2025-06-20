# Étape 1 : build
FROM node:22.15-alpine3.20

# Crée le répertoire de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package.json package-lock.json* tsconfig.json ./

# Installation des dépendances
RUN npm install



CMD [ "npm", "run", "dev" ]