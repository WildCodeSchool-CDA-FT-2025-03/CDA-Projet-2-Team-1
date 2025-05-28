-- Fichier de test pour les consultations
-- Ce fichier utilise les données existantes de dataSetPatient.sql

-- Suppression des consultations existantes pour éviter les doublons
DELETE FROM consultation;

-- Insertion de consultations de test avec des SSN existants au format 12 chiffres
INSERT INTO "consultation" ("id", "date_start", "date_end", "patient_id", "doctor_assigned_id") VALUES
-- Consultation pour patient avec SSN: 123456789001 (formaté: 1 23 45 67 890 01)
(gen_random_uuid(), '2024-01-15 10:30:00+00', '2024-01-15 11:30:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '123456789001'), 
 '550e8400-e29b-41d4-a716-446655440000'),

-- Consultation pour patient avec SSN: 123456789002 (formaté: 1 23 45 67 890 02)
(gen_random_uuid(), '2024-01-15 14:00:00+00', '2024-01-15 15:00:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '123456789002'), 
 '550e8400-e29b-41d4-a716-446655440001'),

-- Consultation pour patient avec SSN: 123456789003 (formaté: 1 23 45 67 890 03)
(gen_random_uuid(), '2024-01-15 16:30:00+00', '2024-01-15 17:30:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '123456789003'), 
 '550e8400-e29b-41d4-a716-446655440002'),

-- Consultation pour patient avec SSN: 123456789004 (formaté: 1 23 45 67 890 04)
(gen_random_uuid(), '2024-01-16 09:00:00+00', '2024-01-16 10:00:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '123456789004'), 
 '550e8400-e29b-41d4-a716-446655440001'),

-- Consultation pour patient avec SSN: 123456789005 (formaté: 1 23 45 67 890 05)
(gen_random_uuid(), '2024-01-16 11:15:00+00', '2024-01-16 12:15:00+00', 
 (SELECT p.id FROM patient p JOIN ssn s ON p.ssn_id = s.id WHERE s.number = '123456789005'), 
 '550e8400-e29b-41d4-a716-446655440002');