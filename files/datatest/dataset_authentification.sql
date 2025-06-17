

INSERT INTO role (name) VALUES
('admin'),
('médecin'),
('secrétaire'),
('agent');

-- Insertion des services
INSERT INTO service (name) VALUES
('administrateur'),
('secrétaire'),
('agent'),
('podologue');


INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('admin', 'admin', 'M', 'admin@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 1, 1);


INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('medecin', 'medecin', 'F', 'medecin@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 2, 4);


INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('secretaire', 'secretaire', 'M', 'secretaire@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 3, 2);


INSERT INTO "user" (firstname, lastname, genre, email, password, is_active, role_id, service_id)
VALUES ('agent', 'agent', 'F', 'agent@hopital.gouv.fr', '$argon2id$v=19$m=65536,t=3,p=4$9kLwM2LM5p75Np20DrNYEw$PXT8wNdqLDdAyaMns9PabvaVJvy24XJBx7fIdEM/2Rk', true, 4, 3);
