#!/usr/bin/env python

DESC = 0
INFO = 1
DATE = 2
DUREE = 3
RDV_START = 4
MEDECIN = 5
MEDECIN_EMEIL = 6
MEDECIN_GENRE = 7
SERVICE = 8
OPEN_DAY = 9
TIME_START = 10
TIME_END = 11
MOTIF = 13
PATIENT_FILE = 13
PATIENT_NAME = 14
PATIENT_SEX = 15
PATIENT_SSN = 16
PATIENT_EMAIL = 17
MEDECIN_FILE = 18
MEDECIN_INFO = 19
PATIENT_ANIV = 20
PATIENT_CODE = 21
PATIENT_VILLE = 22

insert_service = '''
INSERT INTO service (name) VALUES {};
'''
role_service = '''
INSERT INTO role (name) VALUES {};
'''
motif_service = '''
INSERT INTO motif (name) VALUES {};
'''

dataset_path="./files/dataset.tsv"
core_path="./files/core.sql"
data = []
role = ["medecin", "secretaria", "admin", "agent"]
services = []
ssn = []
motif = []

def toSQL(e):
    return "({})".format(",".join(["\'"+ v + "\'" for v in e ]))

with open(dataset_path) as f:
    data = [line for line in f]
    data = data[1:]

for d in data:
    s = d.split('\t')
    services.append(s[SERVICE])
    motif.append(s[MOTIF])
    print(s)

with open(core_path, 'w+') as f:
    w = insert_service.format(",".join([toSQL([e]) for e in set(services)]))
    f.write(w)

    w = insert_service.format(",".join([toSQL([e]) for e in set(role)]))
    f.write(w)

    w = motif_service.format(",".join([toSQL([e]) for e in set(motif)]))
    f.write(w)
