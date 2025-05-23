-- Commande a lancer : 
-- docker exec -i cda-projet-2-team-1-database-1 psql -U bob -d care-plan < ./files/datatest/schema-express-login.sql

-- 🔄 SUPPRESSION DES TABLES EXISTANTES
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS role CASCADE;
DROP TABLE IF EXISTS service CASCADE;

-- 🏗️ CRÉATION DES TABLES

-- Table ROLE
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Table SERVICE
CREATE TABLE service (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Table USER
CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    genre CHAR(1) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    service_id INT,
    role_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_service FOREIGN KEY (service_id) REFERENCES service(id) ON DELETE SET NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);

INSERT INTO role (name) VALUES
('admin'),
('medecin'),
('secretaire'),
('agent');

-- Insertion des services de base
INSERT INTO service (name) VALUES
('administrateur'),
('agent');

-- Ryan Decian (Admin)
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Ryan', 'DECIAN', 'M', 'ryan.decian.pro@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 1, 1);

-- Emma Lefevre (Agent)
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Emma', 'Lefevre', 'F', 'emma.agent@example.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 4, 2);

-- ✅ Insertion des nouveaux services
INSERT INTO service (name) VALUES
('Cardiologie'),
('Chirurgie générale'),
('Dermatologie'),
('Endocrinologie'),
('Gastroentérologie'),
('Gynécologie'),
('Infectiologie'),
('Médecine interne'),
('Neurologie'),
('Néphrologie'),
('ORL (Oto-Rhino-Laryngologie)'),
('Oncologie'),
('Ophtalmologie'),
('Orthopédie'),
('Pneumologie'),
('Psychiatrie'),
('Pédiatrie'),
('Radiologie'),
('Rhumatologie'),
('Urologie');

-- ✅ Insertion des utilisateurs médecins
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Adrienne', 'LACOMBE', 'F', 'adrienne.lacombe@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 14);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Alain', 'COURTOIS', 'H', 'alain.courtois@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 9);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Alice-Corinne', 'HERNANDEZ', 'F', 'alice-corinne.hernandez@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 19);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Alphonse', 'COLAS-PINEAU', 'H', 'alphonse.colas-pineau@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 15);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Benjamin', 'SEGUIN DE LA GARCIA', 'H', 'benjamin.seguindelagarcia@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 17);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Bernadette', 'PICARD', 'F', 'bernadette.picard@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 1);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Christiane', 'THIERRY', 'F', 'christiane.thierry@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 10);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Claudine', 'ROY-ROUSSEL', 'F', 'claudine.roy-roussel@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 13);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Clémence', 'VALLÉE DE MENARD', 'F', 'clémence.valléedemenard@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 7);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Danielle', 'LEMONNIER', 'F', 'danielle.lemonnier@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 8);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Diane', 'VASSEUR', 'F', 'diane.vasseur@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 3);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Eugène', 'HARDY DE LA REGNIER', 'F', 'eugène.hardydelaregnier@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 20);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('François', 'GRENIER', 'H', 'françois.grenier@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 9);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Gilbert', 'VOISIN', 'H', 'gilbert.voisin@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 6);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Guillaume', 'MAURY', 'H', 'guillaume.maury@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 2);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Jacques', 'CHRÉTIEN', 'H', 'jacques.chrétien@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 4);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Jacques-Richard', 'BUISSON', 'H', 'jacques-richard.buisson@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 7);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Jean', 'BOUCHET', 'H', 'jean.bouchet@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 15);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Jean-Tristan', 'LEMONNIER', 'H', 'jean-tristan.lemonnier@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 10);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Jeannine', 'FOUQUET', 'F', 'jeannine.fouquet@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 12);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Laure', 'FISCHER', 'F', 'laure.fischer@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 19);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Laurence', 'FLEURY', 'F', 'laurence.fleury@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 18);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Léon', 'FERRAND', 'H', 'léon.ferrand@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 2);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Margaux', 'BONNEAU', 'F', 'margaux.bonneau@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 5);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Margot', 'CHARLES', 'F', 'margot.charles@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 5);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Marianne', 'LEGRAND', 'F', 'marianne.legrand@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 12);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Michel', 'COHEN', 'H', 'michel.cohen@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 16);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Michel', 'DIAZ', 'H', 'michel.diaz@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 1);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Nathalie', 'COLAS', 'F', 'nathalie.colas@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 18);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Olivier', 'LE LECOMTE', 'H', 'olivier.lelecomte@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 13);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Philippe', 'MOREAU', 'H', 'philippe.moreau@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 11);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Philippe', 'PERRET DE ROCHE', 'H', 'philippe.perretderoche@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 4);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Robert', 'FOUCHER', 'H', 'robert.foucher@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 8);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Roger', 'FOUQUET-SCHNEIDER', 'H', 'roger.fouquet-schneider@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 6);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Stéphane', 'THIBAULT', 'F', 'stéphane.thibault@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 20);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Thibault', 'LECLERC', 'H', 'thibault.leclerc@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 16);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Thibaut', 'FRANÇOIS', 'H', 'thibaut.françois@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 11);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Thierry', 'LAURENT', 'H', 'thierry.laurent@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 14);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Timothée', 'BERNIER-REY', 'H', 'timothée.bernier-rey@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 3);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('William', 'DE GUIBERT', 'H', 'william.deguibert@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 17);