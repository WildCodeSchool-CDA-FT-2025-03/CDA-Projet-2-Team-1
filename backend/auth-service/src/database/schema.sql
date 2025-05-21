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

-- Insertion des services
INSERT INTO service (name) VALUES
('administrateur'),
('secrétaire'),
('agent'),
('podologue');

-- Ryan Decian (Admin)
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Ryan', 'DECIAN', 'M', 'ryan.decian.pro@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 1, 1);

-- Sophie Martin (Médecin)
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Sophie', 'Martin', 'F', 'sophie.medecin@example.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 4);

-- Paul Bernard (Secrétaire)
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Paul', 'Bernard', 'M', 'paul.secretaire@example.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 3, 2);

-- Emma Lefevre (Agent)
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('Emma', 'Lefevre', 'F', 'emma.agent@example.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 4, 3);
