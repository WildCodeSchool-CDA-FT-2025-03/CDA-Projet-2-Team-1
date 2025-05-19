-- Requête pour récupérer toutes les données des patients
SELECT *
FROM patient
ORDER BY id;

-- Commentaire : Cette requête est utilisée par l'endpoint :
-- http://localhost:8080/?pgsql=database&username=bob&db=care-plan&ns=public&select=patient 