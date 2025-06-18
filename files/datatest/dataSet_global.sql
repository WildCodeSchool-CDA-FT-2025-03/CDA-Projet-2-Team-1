-- ========================================
-- DATASET GLOBAL POUR LE SYSTÈME DE RENDEZ-VOUS MÉDICAL
-- ========================================

-- 1. INSERTION DES RÔLES (nécessaire pour les users)
INSERT INTO role (name) VALUES
('admin'),
('médecin'),
('secrétaire'),
('agent');

-- 2. INSERTION DES SERVICES (10 services comme demandé)
INSERT INTO service (name) VALUES
('Cardiologie'),
('Urgences'),
('Pédiatrie'),
('Orthopédie'),
('Dermatologie'),
('Neurologie'),
('Gynécologie'),
('Radiologie'),
('Ophtalmologie'),
('Psychiatrie');

-- 3. INSERTION DES UTILISATEURS
-- Ryan DECIAN (Admin)
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

-- Médecins supplémentaires pour les consultations
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES 
('Jean', 'Dupont', 'M', 'jean.dupont@hospital.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 1),
('Marie', 'Dubois', 'F', 'marie.dubois@hospital.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 5),
('Pierre', 'Rousseau', 'M', 'pierre.rousseau@hospital.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 6),
('Anne', 'Moreau', 'F', 'anne.moreau@hospital.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 7),
('Laurent', 'Simon', 'M', 'laurent.simon@hospital.com', '$argon2id$v=19$m=65536,t=3,p=4$be3rg+9ItyN6mweKYXf0Zg$3tsq+63Nxsazz/liXvgWrDfP2eICsboTOnMyq6C85qg', true, 2, 9);

-- 4. INSERTION DES VILLES
INSERT INTO city (name, zip_code) VALUES
('Paris', '75001'),
('Lyon', '69001'),
('Marseille', '13001'),
('Toulouse', '31000'),
('Nice', '06000'),
('Strasbourg', '67000'),
('Bordeaux', '33000'),
('Lille', '59000'),
('Rennes', '35000'),
('Nantes', '44000');

-- 5. INSERTION DES NUMÉROS DE SÉCURITÉ SOCIALE
INSERT INTO ssn (number) VALUES
('123456789012345'),
('234567890123456'),
('345678901234567'),
('456789012345678'),
('567890123456789'),
('678901234567890'),
('789012345678901'),
('890123456789012'),
('901234567890123'),
('012345678901234');

-- 6. INSERTION DES PATIENTS
WITH patient_data AS (
    SELECT 
        firstname, lastname, birthdate, gender, email,
        ROW_NUMBER() OVER (ORDER BY firstname) as patient_rn
    FROM (
        VALUES 
        ('Marc', 'Leblanc', '1985-03-15', 'M', 'marc.leblanc@email.com'),
        ('Julie', 'Petit', '1990-07-22', 'F', 'julie.petit@email.com'),
        ('Thomas', 'Robert', '1978-11-08', 'M', 'thomas.robert@email.com'),
        ('Claire', 'Michel', '1992-05-14', 'F', 'claire.michel@email.com'),
        ('Nicolas', 'Leroy', '1987-09-30', 'M', 'nicolas.leroy@email.com'),
        ('Camille', 'Roux', '1995-12-03', 'F', 'camille.roux@email.com'),
        ('Alexandre', 'David', '1983-04-17', 'M', 'alexandre.david@email.com'),
        ('Sandrine', 'Bertrand', '1989-08-25', 'F', 'sandrine.bertrand@email.com'),
        ('Julien', 'Fournier', '1991-01-12', 'M', 'julien.fournier@email.com'),
        ('Isabelle', 'Girard', '1986-06-20', 'F', 'isabelle.girard@email.com')
    ) AS p(firstname, lastname, birthdate, gender, email)
),
ssn_numbered AS (
    SELECT id, ROW_NUMBER() OVER (ORDER BY id) as ssn_rn FROM ssn
),
city_numbered AS (
    SELECT id, ROW_NUMBER() OVER (ORDER BY id) as city_rn FROM city
)
INSERT INTO patient (firstname, lastname, birthdate, gender, email, ssn_id, city_id)
SELECT 
    pd.firstname,
    pd.lastname,
    pd.birthdate::date,
    pd.gender,
    pd.email,
    sn.id as ssn_id,
    cn.id as city_id
FROM patient_data pd
JOIN ssn_numbered sn ON sn.ssn_rn = pd.patient_rn
JOIN city_numbered cn ON cn.city_rn = pd.patient_rn;

-- 7. INSERTION DES CONSULTATIONS
WITH consultation_data AS (
    SELECT 
        date_start, date_end,
        ROW_NUMBER() OVER (ORDER BY date_start) as consult_rn
    FROM (
        VALUES 
        (CURRENT_DATE + INTERVAL '0 days' + TIME '09:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '09:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '10:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '10:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '14:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '14:45:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '15:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '15:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '08:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '09:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '11:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '11:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '13:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '14:15:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '16:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '16:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '09:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '10:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '14:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '15:15:00')
    ) AS c(date_start, date_end)
),
patients_numbered AS (
    SELECT id, ROW_NUMBER() OVER (ORDER BY firstname) as patient_rn FROM patient
),
doctors_numbered AS (
    SELECT id, ROW_NUMBER() OVER (ORDER BY firstname) as doctor_rn FROM "user" WHERE role_id = 2
)
INSERT INTO consultation (date_start, date_end, patient_id, doctor_assigned_id)
SELECT 
    cd.date_start::timestamptz,
    cd.date_end::timestamptz,
    pn.id as patient_id,
    dn.id as doctor_assigned_id
FROM consultation_data cd
JOIN patients_numbered pn ON pn.patient_rn = cd.consult_rn
JOIN doctors_numbered dn ON dn.doctor_rn = ((cd.consult_rn - 1) % (SELECT COUNT(*) FROM "user" WHERE role_id = 2)) + 1;

-- 8. INSERTION DE QUELQUES PÉRIODES DE REPOS
WITH rest_data AS (
    SELECT 
        type, date_start, date_end,
        ROW_NUMBER() OVER (ORDER BY date_start) as rest_rn
    FROM (
        VALUES 
        (
    'Maladie',
    date_trunc ('day', NOW ()),
    date_trunc ('day', NOW () + INTERVAL '1 day')
  ),
  (
    'Maladie',
    date_trunc ('day', NOW () + INTERVAL '1 day'),
    date_trunc ('day', NOW () + INTERVAL '2 day')
  ),
  (
    'Maladie',
    date_trunc ('day', NOW () + INTERVAL '2 day'),
    date_trunc ('day', NOW () + INTERVAL '3 day')
  ),
  (
    'Congé',
    date_trunc ('day', NOW () + INTERVAL '4 day'),
    date_trunc ('day', NOW () + INTERVAL '5 day')
  ),
  (
    'Congé',
    date_trunc ('day', NOW () + INTERVAL '5 day'),
    date_trunc ('day', NOW () + INTERVAL '6 day')
  ),
  (
    'Formation',
    date_trunc ('day', NOW () + INTERVAL '7 day'),
    date_trunc ('day', NOW () + INTERVAL '8 day')
  )
    ) AS r(type, date_start, date_end)
),
doctors_for_rest AS (
    SELECT id, ROW_NUMBER() OVER (ORDER BY firstname) as doctor_rn FROM "user" WHERE role_id = 2
)
INSERT INTO rest (type, date_start, date_end, user_id)
SELECT 
    rd.type,
    rd.date_start::timestamptz,
    rd.date_end::timestamptz,
    dfr.id as user_id
FROM rest_data rd
JOIN doctors_for_rest dfr ON dfr.doctor_rn = rd.rest_rn;