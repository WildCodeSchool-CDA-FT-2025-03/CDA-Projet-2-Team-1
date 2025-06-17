FROM node:lts-alpine

# Crée le répertoire de travail
WORKDIR /app

# Copie les fichiers de dépendances
COPY *.json *.ts *.js index.html ./
COPY public/ public/
COPY src/ src/

# Installation des dépendances
RUN npm install

CMD [ "npm", "run", "dev" ]
