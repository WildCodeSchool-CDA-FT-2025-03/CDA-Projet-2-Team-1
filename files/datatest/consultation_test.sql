-- Fichier de test pour les consultations avec SSN français à 15 chiffres
-- Format SSN français : "1 23 45 56 890 123 45" (15 chiffres)

-- Suppression des consultations existantes pour éviter les doublons
DELETE FROM consultation;

-- Mise à jour des SSN existants pour le format français 15 chiffres
UPDATE ssn SET number = '123456789012345' WHERE id = 'aaaaaaa1-0000-0000-0000-000000000001';
UPDATE ssn SET number = '987654321098765' WHERE id = 'aaaaaaa2-0000-0000-0000-000000000002';
UPDATE ssn SET number = '111223334445556' WHERE id = 'aaaaaaa3-0000-0000-0000-000000000003';
UPDATE ssn SET number = '444556667778889' WHERE id = 'aaaaaaa4-0000-0000-0000-000000000004';
UPDATE ssn SET number = '777888999000111' WHERE id = 'aaaaaaa5-0000-0000-0000-000000000005';

-- Insertion de consultations de test avec des SSN français à 15 chiffres
INSERT INTO "consultation" ("id", "date_start", "date_end", "patient_id", "doctor_assigned_id") VALUES
-- Consultation pour patient avec SSN: 123456789012345 (formaté: 1 23 45 67 890 123 45)
(gen_random_uuid(), '2024-01-15 10:30:00+00', '2024-01-15 11:30:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '123456789012345'), 
 '550e8400-e29b-41d4-a716-446655440000'),

-- Consultation pour patient avec SSN: 987654321098765 (formaté: 9 87 65 43 210 987 65)
(gen_random_uuid(), '2024-01-15 14:00:00+00', '2024-01-15 15:00:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '987654321098765'), 
 '550e8400-e29b-41d4-a716-446655440001'),

-- Consultation pour patient avec SSN: 111223334445556 (formaté: 1 11 22 33 344 455 56)
(gen_random_uuid(), '2024-01-15 16:30:00+00', '2024-01-15 17:30:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '111223334445556'), 
 '550e8400-e29b-41d4-a716-446655440002'),

-- Consultation pour patient avec SSN: 444556667778889 (formaté: 4 44 55 66 677 788 89)
(gen_random_uuid(), '2024-01-16 09:00:00+00', '2024-01-16 10:00:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '444556667778889'), 
 '550e8400-e29b-41d4-a716-446655440001'),

-- Consultation pour patient avec SSN: 777888999000111 (formaté: 7 77 88 89 990 001 11)
(gen_random_uuid(), '2024-01-16 11:15:00+00', '2024-01-16 12:15:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '777888999000111'), 
 '550e8400-e29b-41d4-a716-446655440002');