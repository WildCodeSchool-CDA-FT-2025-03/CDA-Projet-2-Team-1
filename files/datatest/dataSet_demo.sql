-- ========================================
-- DATASET FINAL POUR DEMO
-- ========================================

-- 1. INSERTION DES RÔLES
INSERT INTO role (name) VALUES
('admin'),
('médecin'),
('secrétaire'),
('agent');

-- 2. INSERTION DES SERVICES
INSERT INTO service (name) VALUES
('podologue'),
('Cardiologie'),
('Urgences'),
('Pédiatrie'),
('Orthopédie'),
('Dermatologie'),
('Neurologie'),
('Gynécologie'),
('Radiologie'),
('Ophtalmologie'),
('Psychiatrie'),
('Pneumologie'),
('Rhumatologie'),
('Endocrinologie'),
('Gastroentérologie'),
('Oncologie'),
('Anesthésie');


-- 3. INSERTION DES UTILISATEURS
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('admin', 'admin', 'M', 'admin@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 1, 1);

INSERT INTO "user" (id, firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('b1aef857-4ca5-4da1-bb55-4eb9a05da185','medecin', 'medecin', 'F', 'medecin@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 4);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('secretaire', 'secretaire', 'M', 'secretaire@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 3, 2);

INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('agent', 'agent', 'F', 'agent@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 4, 3);

-- Médecins supplémentaires
INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES 
('Jean', 'Dupont', 'M', 'jean.dupont@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 5),
('Marie', 'Dubois', 'F', 'marie.dubois@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 6),
('Pierre', 'Rousseau', 'M', 'pierre.rousseau@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 7),
('Anne', 'Moreau', 'F', 'anne.moreau@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 8),
('Laurent', 'Simon', 'M', 'laurent.simon@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 9),
('Sophie', 'Lefevre', 'F', 'sophie.lefevre@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 10),
('Thomas', 'Garcia', 'M', 'thomas.garcia@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 11),
('Isabelle', 'Martinez', 'F', 'isabelle.martinez@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 12),
('Julien', 'Roux', 'M', 'julien.roux@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 13),
('Camille', 'Blanc', 'F', 'camille.blanc@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 14),
('Nicolas', 'Leroux', 'M', 'nicolas.leroux@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 15),
('Emilie', 'Durand', 'F', 'emilie.durand@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 16),
('Alexandre', 'Petit', 'M', 'alexandre.petit@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 17),
('Sandrine', 'Lopez', 'F', 'sandrine.lopez@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 12),
('David', 'Gonzalez', 'M', 'david.gonzalez@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 14),
('Claire', 'Fontaine', 'F', 'claire.fontaine@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 4);

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
('Nantes', '44000'),
('Montpellier', '34000'),
('Reims', '51100'),
('Le Havre', '76600'),
('Clermont-Ferrand', '63000'),
('Dijon', '21000'),
('Angers', '49000'),
('Saint-Étienne', '42000'),
('Toulon', '83000'),
('Grenoble', '38000'),
('Le Mans', '72000'),
('Brest', '29200'),
('Limoges', '87000'),
('Tours', '37000'),
('Amiens', '80000'),
('Perpignan', '66000'),
('Metz', '57000'),
('Besançon', '25000'),
('Orléans', '45000'),
('Rouen', '76000'),
('Caen', '14000');

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
('012345678901234'),
('123456789012346'),
('234567890123457'),
('345678901234568'),
('456789012345679'),
('567890123456780'),
('678901234567891'),
('789012345678902'),
('890123456789013'),
('901234567890124'),
('012345678901235'),
('123456789012347'),
('234567890123458'),
('345678901234569'),
('456789012345680'),
('567890123456781'),
('678901234567892'),
('789012345678903'),
('890123456789014'),
('901234567890125'),
('012345678901236'),
('123456789012348'),
('234567890123459'),
('345678901234570'),
('456789012345681'),
('567890123456782'),
('678901234567893'),
('789012345678904'),
('890123456789015'),
('901234567890126'),
('012345678901237'),
('123456789012349'),
('234567890123460'),
('345678901234571'),
('456789012345682'),
('567890123456783'),
('678901234567894'),
('789012345678905'),
('890123456789016'),
('901234567890127'),
('012345678901238');

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
        ('Isabelle', 'Girard', '1986-06-20', 'F', 'isabelle.girard@email.com'),
        ('Antoine', 'Morel', '1984-02-28', 'M', 'antoine.morel@email.com'),
        ('Sophie', 'Lambert', '1993-09-12', 'F', 'sophie.lambert@email.com'),
        ('Maxime', 'Benoit', '1979-04-05', 'M', 'maxime.benoit@email.com'),
        ('Céline', 'Andre', '1988-11-18', 'F', 'celine.andre@email.com'),
        ('Vincent', 'Faure', '1981-07-30', 'M', 'vincent.faure@email.com'),
        ('Nathalie', 'Mercier', '1994-01-25', 'F', 'nathalie.mercier@email.com'),
        ('Olivier', 'Lemoine', '1976-08-14', 'M', 'olivier.lemoine@email.com'),
        ('Elodie', 'Robin', '1991-05-07', 'F', 'elodie.robin@email.com'),
        ('Fabien', 'Gaillard', '1985-12-19', 'M', 'fabien.gaillard@email.com'),
        ('Virginie', 'Garnier', '1989-03-22', 'F', 'virginie.garnier@email.com'),
        ('Damien', 'Roussel', '1982-10-11', 'M', 'damien.roussel@email.com'),
        ('Laetitia', 'Muller', '1996-06-08', 'F', 'laetitia.muller@email.com'),
        ('Romain', 'Lefebvre', '1980-01-15', 'M', 'romain.lefebvre@email.com'),
        ('Audrey', 'Laurent', '1993-08-03', 'F', 'audrey.laurent@email.com'),
        ('Sébastien', 'Prevost', '1987-04-26', 'M', 'sebastien.prevost@email.com'),
        ('Caroline', 'Rey', '1991-11-09', 'F', 'caroline.rey@email.com'),
        ('Mathieu', 'Perrin', '1984-07-17', 'M', 'mathieu.perrin@email.com'),
        ('Stéphanie', 'Clement', '1988-02-13', 'F', 'stephanie.clement@email.com'),
        ('Florian', 'Jacquet', '1985-09-29', 'M', 'florian.jacquet@email.com'),
        ('Amélie', 'Brun', '1992-06-21', 'F', 'amelie.brun@email.com'),
        ('Christophe', 'Caron', '1977-03-04', 'M', 'christophe.caron@email.com'),
        ('Mélanie', 'Giraud', '1995-10-16', 'F', 'melanie.giraud@email.com'),
        ('François', 'Renard', '1983-05-23', 'M', 'francois.renard@email.com'),
        ('Karine', 'Legrand', '1990-12-31', 'F', 'karine.legrand@email.com'),
        ('Guillaume', 'Meunier', '1986-08-07', 'M', 'guillaume.meunier@email.com'),
        ('Patricia', 'Dufour', '1978-01-19', 'F', 'patricia.dufour@email.com'),
        ('Jérôme', 'Marchand', '1989-06-12', 'M', 'jerome.marchand@email.com'),
        ('Sylvie', 'Bonnet', '1994-03-28', 'F', 'sylvie.bonnet@email.com'),
        ('Ludovic', 'Pons', '1981-10-05', 'M', 'ludovic.pons@email.com'),
        ('Valérie', 'Fleury', '1987-07-18', 'F', 'valerie.fleury@email.com'),
        ('Yannick', 'Blanchard', '1993-02-10', 'M', 'yannick.blanchard@email.com'),
        ('Monique', 'Paris', '1975-09-24', 'F', 'monique.paris@email.com'),
        ('Alain', 'Lacroix', '1988-04-14', 'M', 'alain.lacroix@email.com'),
        ('Brigitte', 'Colin', '1992-11-27', 'F', 'brigitte.colin@email.com'),
        ('Pascal', 'Picard', '1979-06-02', 'M', 'pascal.picard@email.com'),
        ('Martine', 'Schneider', '1985-01-08', 'F', 'martine.schneider@email.com'),
        ('Daniel', 'Chevalier', '1990-08-20', 'M', 'daniel.chevalier@email.com'),
        ('Françoise', 'Henry', '1984-05-11', 'F', 'francoise.henry@email.com'),
        ('Jean-Pierre', 'Masson', '1982-12-03', 'M', 'jeanpierre.masson@email.com'),
        ('Catherine', 'Fernandez', '1991-09-15', 'F', 'catherine.fernandez@email.com')
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
JOIN city_numbered cn ON cn.city_rn = ((pd.patient_rn - 1) % (SELECT COUNT(*) FROM city)) + 1;

-- 7. INSERTION DES CONSULTATIONS (100 consultations sur 4 jours)
WITH consultation_data AS (
    SELECT 
        date_start, date_end,
        ROW_NUMBER() OVER (ORDER BY date_start) as consult_rn
    FROM (
        VALUES 
        -- Jour 1 (25 consultations)
        (CURRENT_DATE + INTERVAL '0 days' + TIME '08:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '08:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '08:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '09:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '09:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '09:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '09:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '10:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '10:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '10:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '10:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '11:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '11:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '11:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '11:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '12:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '14:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '14:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '14:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '15:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '15:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '15:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '15:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '16:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '16:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '16:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '16:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '17:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '17:00:00', CURRENT_DATE + INTERVAL '0 days' + TIME '17:30:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '17:30:00', CURRENT_DATE + INTERVAL '0 days' + TIME '18:00:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '08:15:00', CURRENT_DATE + INTERVAL '0 days' + TIME '08:45:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '08:45:00', CURRENT_DATE + INTERVAL '0 days' + TIME '09:15:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '09:15:00', CURRENT_DATE + INTERVAL '0 days' + TIME '09:45:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '09:45:00', CURRENT_DATE + INTERVAL '0 days' + TIME '10:15:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '10:15:00', CURRENT_DATE + INTERVAL '0 days' + TIME '10:45:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '10:45:00', CURRENT_DATE + INTERVAL '0 days' + TIME '11:15:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '11:15:00', CURRENT_DATE + INTERVAL '0 days' + TIME '11:45:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '14:15:00', CURRENT_DATE + INTERVAL '0 days' + TIME '14:45:00'),
        (CURRENT_DATE + INTERVAL '0 days' + TIME '14:45:00', CURRENT_DATE + INTERVAL '0 days' + TIME '15:15:00'),
        
        -- Jour 2 (25 consultations)
        (CURRENT_DATE + INTERVAL '1 days' + TIME '08:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '08:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '08:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '09:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '09:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '09:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '09:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '10:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '10:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '10:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '10:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '11:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '11:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '11:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '11:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '12:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '14:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '14:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '14:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '15:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '15:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '15:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '15:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '16:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '16:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '16:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '16:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '17:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '17:00:00', CURRENT_DATE + INTERVAL '1 days' + TIME '17:30:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '17:30:00', CURRENT_DATE + INTERVAL '1 days' + TIME '18:00:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '08:15:00', CURRENT_DATE + INTERVAL '1 days' + TIME '08:45:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '08:45:00', CURRENT_DATE + INTERVAL '1 days' + TIME '09:15:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '09:15:00', CURRENT_DATE + INTERVAL '1 days' + TIME '09:45:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '09:45:00', CURRENT_DATE + INTERVAL '1 days' + TIME '10:15:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '10:15:00', CURRENT_DATE + INTERVAL '1 days' + TIME '10:45:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '10:45:00', CURRENT_DATE + INTERVAL '1 days' + TIME '11:15:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '11:15:00', CURRENT_DATE + INTERVAL '1 days' + TIME '11:45:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '14:15:00', CURRENT_DATE + INTERVAL '1 days' + TIME '14:45:00'),
        (CURRENT_DATE + INTERVAL '1 days' + TIME '14:45:00', CURRENT_DATE + INTERVAL '1 days' + TIME '15:15:00'),
        
        -- Jour 3 (25 consultations)
        (CURRENT_DATE + INTERVAL '2 days' + TIME '08:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '08:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '08:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '09:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '09:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '09:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '09:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '10:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '10:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '10:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '10:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '11:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '11:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '11:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '11:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '12:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '14:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '14:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '14:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '15:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '15:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '15:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '15:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '16:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '16:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '16:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '16:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '17:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '17:00:00', CURRENT_DATE + INTERVAL '2 days' + TIME '17:30:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '17:30:00', CURRENT_DATE + INTERVAL '2 days' + TIME '18:00:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '08:15:00', CURRENT_DATE + INTERVAL '2 days' + TIME '08:45:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '08:45:00', CURRENT_DATE + INTERVAL '2 days' + TIME '09:15:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '09:15:00', CURRENT_DATE + INTERVAL '2 days' + TIME '09:45:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '09:45:00', CURRENT_DATE + INTERVAL '2 days' + TIME '10:15:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '10:15:00', CURRENT_DATE + INTERVAL '2 days' + TIME '10:45:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '10:45:00', CURRENT_DATE + INTERVAL '2 days' + TIME '11:15:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '11:15:00', CURRENT_DATE + INTERVAL '2 days' + TIME '11:45:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '14:15:00', CURRENT_DATE + INTERVAL '2 days' + TIME '14:45:00'),
        (CURRENT_DATE + INTERVAL '2 days' + TIME '14:45:00', CURRENT_DATE + INTERVAL '2 days' + TIME '15:15:00'),
        
        -- Jour 4 (25 consultations)
        (CURRENT_DATE + INTERVAL '3 days' + TIME '08:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '08:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '08:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '09:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '09:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '09:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '09:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '10:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '10:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '10:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '10:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '11:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '11:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '11:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '11:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '12:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '14:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '14:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '14:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '15:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '15:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '15:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '15:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '16:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '16:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '16:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '16:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '17:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '17:00:00', CURRENT_DATE + INTERVAL '3 days' + TIME '17:30:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '17:30:00', CURRENT_DATE + INTERVAL '3 days' + TIME '18:00:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '08:15:00', CURRENT_DATE + INTERVAL '3 days' + TIME '08:45:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '08:45:00', CURRENT_DATE + INTERVAL '3 days' + TIME '09:15:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '09:15:00', CURRENT_DATE + INTERVAL '3 days' + TIME '09:45:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '09:45:00', CURRENT_DATE + INTERVAL '3 days' + TIME '10:15:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '10:15:00', CURRENT_DATE + INTERVAL '3 days' + TIME '10:45:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '10:45:00', CURRENT_DATE + INTERVAL '3 days' + TIME '11:15:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '11:15:00', CURRENT_DATE + INTERVAL '3 days' + TIME '11:45:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '14:15:00', CURRENT_DATE + INTERVAL '3 days' + TIME '14:45:00'),
        (CURRENT_DATE + INTERVAL '3 days' + TIME '14:45:00', CURRENT_DATE + INTERVAL '3 days' + TIME '15:15:00')
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
JOIN patients_numbered pn ON pn.patient_rn = ((cd.consult_rn - 1) % (SELECT COUNT(*) FROM patient)) + 1
JOIN doctors_numbered dn ON dn.doctor_rn = ((cd.consult_rn - 1) % (SELECT COUNT(*) FROM "user" WHERE role_id = 2)) + 1;

-- 8. INSERTION DES PÉRIODES DE REPOS
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