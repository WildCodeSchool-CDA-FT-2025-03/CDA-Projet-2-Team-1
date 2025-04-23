# Étape 1 : build
FROM node:18-alpine AS builder

# Crée le répertoire de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY package.json package-lock.json* tsconfig.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY ./src ./src

# Compilation TypeScript
RUN npm run build

# Étape 2 : image de prod
FROM node:18-alpine

# Répertoire de travail
WORKDIR /app

# Copie les fichiers nécessaires
COPY package.json package-lock.json* ./
RUN npm install --only=production

# Copie du code compilé depuis le builder
COPY --from=builder /app/dist ./dist

# Lancement de l'application
CMD ["node", "dist/index.js"]