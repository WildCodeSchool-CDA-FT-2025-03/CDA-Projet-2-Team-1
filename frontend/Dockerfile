FROM node:22.15 AS builder

# Crée le répertoire de travail
WORKDIR /opt/app

# Copie les fichiers de dépendances
COPY *.json *.ts *.js index.html ./
COPY public/ public/
COPY playwright-report/ playwright-report/

# Installation des dépendances
RUN npm install

FROM builder AS dev

ENTRYPOINT [ "npm", "run", "dev" ]
