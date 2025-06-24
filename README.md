# 🏥 Care Plan - Gestion Médicale Intelligente

## 📋 À propos du projet

**Care Plan** est une application web moderne conçue pour optimiser la gestion des rendez-vous et des utilisateurs dans un environnement hospitalier. Développée pour répondre aux besoins spécifiques des établissements de santé, cette solution permet une coordination fluide entre les agents d'accueil, secrétaires, professionnels de santé et administrateurs grâce à des fonctionnalités clés :

- 👨⚕️ Gestion des plannings médicaux
- 📅 Prise de rendez-vous intelligente
- 🔐 Contrôle granulaire des accès utilisateurs
- 📤 Notifications automatisées par email
- 🗂 Archivage sécurisé des dossiers patients

---

## 🔥 Objectif pédagogique

Ce projet est réalisé dans le cadre de la formation **CDA - Concepteur Développeur d'Applications** par une équipe de 5 étudiants.

---

## 👥 Rôles & Permissions

| Rôle                          | Droits & Accès                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🟢 **Agent**                  | - Accès mobile uniquement<br>- Recherche patient (nom / n° sécu)<br>- Affichage du lieu et horaire du rendez-vous                                                                                                                                                                                                                                                                                                                                      |
| 🟡 **Secrétaire**             | - Gestion complète des rendez-vous (créer, modifier, supprimer)<br>- Accès à l'emploi du temps de tous les professionnels de santé<br>- Consultation des absences et congés du personnel médical<br>- Aucun accès aux dossiers médicaux<br>- Ne peut pas poser de congés ou indiquer une absence                                                                                                                                                       |
| 🔵 **Professionnel de santé** | - Consultation et historique de ses rendez-vous<br>- Consultation de ses anciennes consultations<br>- Accès à tous les dossiers médicaux<br>- Rédaction obligatoire d'un compte rendu par consultation<br>- Ne peut pas modifier ni supprimer un compte rendu<br>- Peut rédiger un compte rendu correctif<br>- Peut consulter son propre planning<br>- Peut faire une demande de congé ou d'absence<br>- Ne peut pas voir le planning de ses collègues |
| 🔴 **Admin**                  | - Création, modification, suppression d'utilisateurs<br>- Modification des rôles utilisateurs<br>- Accès au planning de tout le personnel (agents, secrétaires, professionnels de santé, admins)<br>- Peut modifier le planning de tout le personnel<br>- Aucun accès aux dossiers médicaux ni aux rendez-vous des patients                                                                                                                            |

## 🔐 Modèle de permissions

| Rôle       | Dossiers patients     | RDV | Congés / Absences                 | Planning              | Comptes utilisateurs |
| ---------- | --------------------- | --- | --------------------------------- | --------------------- | -------------------- |
| Agent      | ❌                    | ✅  | ❌                                | ❌                    | ❌                   |
| Secrétaire | ❌                    | ✅  | Lecture seule congés/absences pro | Lecture planning pro  | ❌                   |
| Médecin    | ✅ Lecture / Ajout CR | ✅  | ✅ (sur soi-même)                 | ✅ (perso uniquement) | ❌                   |
| Admin      | ❌                    | ❌  | ✅ (tout personnel)               | ✅ (tout personnel)   | ✅ (CRUD + rôles)    |

---

## 🧱 Architecture technique

L'application repose sur une architecture **microservices** pour une meilleure scalabilité et séparation des responsabilités. Chaque microservice communique via **GraphQL**.

---

## 🚀 Technologies utilisées

### Frontend

- ⚛️ **React** - Interfaces dynamiques
- 🔷 **TypeScript** - Typage statique robuste
- 🎨 **TailwindCSS** - Framework CSS utilitaire
- 🧩 **Shadcn UI** - Composants UI accessibles
- 🔍 **@headlessui/react** - Composants UI accessibles sans styles
- 📅 **tweakcn** - Génération de thème UI
- 🔄 **GraphQL** - API flexible
- 🔌 **TypeORM** - ORM TypeScript
- 📅 **casl** - Gestion des permissions
- 🖼️ **Framer Motion** - Animations fluides
- 🔍 **Lucide React** - Icônes pour React
- ✉️ **React Email** - Templates email responsive
- 🧹 **eslint** - Linter de code
- 🔷 **prettier** - Formattage de code
- 🔍 **husky** - Pré-commit hook
- 🧪 **playwright** - Tests UI

### Backend

- 🗄️ **PostgreSQL** - Base de données relationnelle
- 📧 **Nodemailer** - Emails transactionnels
- 🎨 **Redis** - Cache performant
- 🔍 **Nginx** - Proxy inverse
- 🐳 **Docker** - Conteneurisation
- 📅 **Day.js** - Gestion des dates
- 🔐 **JWT** - Authentification sécurisée
- 🔑 **Argon2 / Crypto** - Hashing sécurisé

---

## 🧹 Microservices prévus

| Microservice            | Description                           | Port | Base de données |
| ----------------------- | ------------------------------------- | ---- | --------------- |
| Auth Service            | Connexion, JWT, gestion des rôles     | 5000 | PostgreSQL      |
| Rendez-vous Service     | Gestion des rendez-vous               | 5001 | PostgreSQL      |
| Patient Service         | Infos patients, recherche, historique | 5002 | PostgreSQL      |
| Dossier Médical Service | Dossiers médicaux                     | 5003 | PostgreSQL      |
| Planning Service        | Plannings et congés du personnel      | 5004 | PostgreSQL      |
| User Management         | Gestion des utilisateurs              | 5005 | PostgreSQL      |

---

## 📁 Structure du dépôt

```
care-plan/
│
├── frontend/             # Application React
├── backend/
│   ├── auth-service/
│   ├── appointment-service/
│   ├── email-service/
│   ├── Dockerfile
├── docker-compose.yml    # Orchestration
└── README.md
```

---

## 🛠️ Installation

1. Cloner le dépôt

```bash
git clone https://github.com/WildCodeSchool-CDA-FT-2025-03/CDA-Projet-2-Team-1.git
cd care-plan
```

2. Installer les dépendances racine

```bash
npm install
```

3. Installer les dépendances des services backend

```bash
cd backend/<service-name>
npm install
```

4. Lancer tous les services avec Docker

```bash
docker-compose up --build
```

5. Accéder à l'application :

- Frontend : [http://localhost:3000](http://localhost:3000)
- Backend GraphQL : `/graphql` sur chaque service

---

## 🧪 Bonnes pratiques

### Convention de commits

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `refactor:` Refacto sans changement fonctionnel
- `style:` Changement visuel / CSS uniquement

### Workflow de développement

1. `npm outdated` — Vérification des dépendances obsolètes
2. `npm run lint` — Analyse statique du code
3. `npm test` — Lancement des tests
4. `npm run dev` — Démarrage en développement
5. `npm run build` — Build de production

---

## 📆 Roadmap

- [x] Définition des rôles utilisateurs
- [x] Choix technologiques
- [ ] Authentification JWT sécurisée
- [ ] Développement de l'interface agent mobile
- [ ] Création du dashboard professionnel
- [ ] Panel de gestion administrateur
- [ ] API GraphQL centralisée
- [ ] Intégration des tests (unitaires + E2E)
- [ ] Déploiement (Docker / VPS / NAS)

---

## 👨‍💻 Équipe projet

| Nom           | Rôle                  |
| ------------- | --------------------- |
| Ryan DECIAN   | Développeur Fullstack |
| Romaric       | Développeur Fullstack |
| Rodolphe      | Développeur Fullstack |
| Maximilien    | Développeur Fullstack |
| Florian SEBAL | Développeur Fullstack |

---

## 📜 Licence

Projet développé dans un cadre pédagogique — toute utilisation externe doit être autorisée par l'équipe.
tset
