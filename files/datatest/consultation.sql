INSERT INTO service (name) VALUES ('Gynécologie'), ('Psychiatrie'), ('Rhumatologie');

INSERT INTO "ssn" ("id", "number") VALUES
('9f52541f-6fd1-46f6-82e5-9e03144af896','123-45-6789'),
('e0eb73a4-7b3c-46bb-af57-870505fc035d','987-65-4321'),
('c219f71d-ef14-417a-8223-b897b3a51f64','111-22-3333');

INSERT INTO "patient" ("id", "firstName", "lastName", "ssn_id") VALUES
('fe6a9b0a-8e82-496f-9621-827fabe24a6e','Jean A','Dupont','9f52541f-6fd1-46f6-82e5-9e03144af896'),
('dc9ce2d2-a28a-41e6-9eda-31e9e0f58eb9','Jean B','Dupont','e0eb73a4-7b3c-46bb-af57-870505fc035d'),
('17b87836-e9b7-4c5c-b799-02c9b8cb892b','Jean C','Dupont','c219f71d-ef14-417a-8223-b897b3a51f64');

INSERT INTO "user" (id, service_id) VALUES
('550e8400-e29b-41d4-a716-446655440000', 1),
('550e8400-e29b-41d4-a716-446655440001', 2),
('550e8400-e29b-41d4-a716-446655440002', 3);

INSERT INTO "consultation" ("id", "date_start", "date_end", "patient_id", "doctor_assigned_id") VALUES
(gen_random_uuid(), NOW(), NOW() + INTERVAL '1 hour', 'fe6a9b0a-8e82-496f-9621-827fabe24a6e', '550e8400-e29b-41d4-a716-446655440000'),
(gen_random_uuid(), NOW() + INTERVAL '1 hour', NOW() + INTERVAL '2 hour' ,'dc9ce2d2-a28a-41e6-9eda-31e9e0f58eb9', '550e8400-e29b-41d4-a716-446655440001'),
(gen_random_uuid(), NOW() + INTERVAL '2 hour', NOW() + INTERVAL '3 hour','17b87836-e9b7-4c5c-b799-02c9b8cb892b', '550e8400-e29b-41d4-a716-446655440002');
