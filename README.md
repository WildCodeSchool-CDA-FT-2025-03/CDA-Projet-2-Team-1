# CDA-Projet-2-Team-1

# 🏥 Care Plan - Application Web de Gestion Hospitalière

Bienvenue sur le dépôt officiel de **Care Plan**, une application web conçue pour faciliter la gestion des services d’un établissement hospitalier.

---

## 🔥 Objectif du projet

L’objectif est de digitaliser les interactions internes d’un hôpital en fournissant une application web intuitive destinée aux **agents d'accueil**, **secrétaires**, **professionnels de santé** et **administrateurs**.

Ce projet est développé par une équipe de 5 étudiants dans le cadre de la formation **CDA - Concepteur Développeur d’Applications**.

---

## 👥 Rôles & Permissions

| Rôle                   | Droits & Accès                                                                                      |
|------------------------|-----------------------------------------------------------------------------------------------------|
| 🟢 **Agent**            | - Accès mobile uniquement<br>- Recherche patient (nom / n° sécu)<br>- Affichage du lieu et horaire du rendez-vous |
| 🟡 **Secrétaire**       | - Gestion complète des rendez-vous (créer, modifier, supprimer)<br>- Référent pour les informations patients |
| 🔵 **Professionnel de santé** | - Création, modification et annulation de rendez-vous<br>- Accès et création de dossiers médicaux |
| 🔴 **Admin**            | - Gestion du personnel (création, suppression, modification des comptes)<br>- Attribution ou modification des rôles<br>- Gestion des rendez-vous et plannings du personnel médical |

---

## 🧱 Architecture

L'application est construite selon une architecture **microservices**, avec séparation claire des responsabilités. Chaque microservice est dédié à une fonctionnalité précise et communique via **GraphQL**.

---

## 🪰 Technologies utilisées

### Frontend
- React (TypeScript)
- React Router
- Axios
- React Query
- CSS Modules ou TailwindCSS

### Backend (Microservices)
- Express.js
- Apollo Server (GraphQL)
- TypeORM
- PostgreSQL ou MariaDB
- JWT / Argon2 / Crypto
- Docker & Docker Compose

---

## 🧹 Services prévus

| Microservice           | Description                            | Port  | Base de données |
|------------------------|----------------------------------------|-------|-----------------|
| Auth Service           | Connexion, JWT, gestion des rôles      | 5000  | PostgreSQL      |
| Rendez-vous Service    | Création et gestion des rendez-vous    | 5001  | PostgreSQL      |
| Patient Service        | Infos patients, recherche, historique  | 5002  | PostgreSQL      |
| Dossier Médical Service| Dossiers médicaux                      | 5003  | PostgreSQL      |
| Planning Service       | Emplois du temps des professionnels    | 5004  | PostgreSQL      |
| User Management        | Gestion des utilisateurs (Admin)       | 5005  | PostgreSQL      |

---

## 🧰 Structure du dépôt

```
care-plan/
│
├── frontend/             # Application React
├── backend/
│   ├── auth-service/
│   ├── rdv-service/
│   ├── patient-service/
│   ├── dossier-service/
│   ├── planning-service/
│   └── user-service/
├── docker-compose.yml    # Orchestration
└── README.md
```

---

## 🚀 Démarrage rapide

### 1. Cloner le dépôt

```bash
git clone https://github.com/WildCodeSchool-CDA-FT-2025-03/CDA-Projet-2-Team-1.git
cd care-plan
```

### 2. Lancer le projet

```bash
docker-compose up --build
```

### 3. Accès

- Application Web : [http://localhost:3000](http://localhost:3000)
- Interfaces GraphQL : `/graphql` sur chaque service

---

## 🛠️ À faire (Roadmap)

- [x] Définir les rôles et droits utilisateurs
- [ ] Mise en place de l’authentification JWT
- [ ] Création de l’interface Agent mobile
- [ ] Dashboard Professionnel de santé
- [ ] Interface Admin pour la gestion du personnel
- [ ] API GraphQL pour les rendez-vous
- [ ] Base de données relationnelle avec TypeORM
- [ ] Tests unitaires & intégration
- [ ] Déploiement

---

## 👨‍💻 Équipe projet

| Nom                  | Rôle                       |
|---------------------|----------------------------|
| Ryan DECIAN          | Développeur Fullstack      |
| Romaric              | ...                        |
| Rodolphe             | ...                        |
| Maximilien           | ...                        |
| Florian SEBAL        | ...                        |

---

## 📜 Licence

Projet développé dans un cadre pédagogique — toute utilisation externe doit être autorisée par l’équipe.

