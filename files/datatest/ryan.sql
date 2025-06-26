INSERT INTO service (name) VALUES ('Gynécologie'), ('Psychiatrie'), ('Rhumatologie');

INSERT INTO "ssn" ("id", "number") VALUES
('9f52541f-6fd1-46f6-82e5-9e03144af896', '123456789012345');

INSERT INTO "city" ("id", "name", "zip_code") VALUES
('11111111-1111-1111-1111-111111111111', 'Paris', '75000');

INSERT INTO "patient" ("id", "firstname", "lastname", "ssn_id", "city_id", "gender", "email", "birthdate") VALUES
('11111111-1111-1111-1111-000000000001', 'Jean', 'Dupont', '9f52541f-6fd1-46f6-82e5-9e03144af896', '11111111-1111-1111-1111-111111111111', 'M', 'jean.dupont@email.com', '1980-01-01 00:00:00+00');