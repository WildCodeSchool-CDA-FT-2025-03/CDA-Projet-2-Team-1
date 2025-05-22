DROP TABLE IF EXISTS "patient";
CREATE TABLE "public"."patient" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "firstname" character varying(64),
    "lastname" character varying(64),
    "birthdate" date,
    "ssn_id" uuid,
    CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id")
);

INSERT INTO "patient" ("id", "firstname", "lastname", "birthdate", "ssn_id") VALUES
('fe6a9b0a-8e82-496f-9621-827fabe24a6e',	'Jean',	'Dupont',	'1990-01-01',	'9f52541f-6fd1-46f6-82e5-9e03144af896'),
('dc9ce2d2-a28a-41e6-9eda-31e9e0f58eb9',	'Jean',	'Dupont',	'1991-02-02',	'e0eb73a4-7b3c-46bb-af57-870505fc035d'),
('17b87836-e9b7-4c5c-b799-02c9b8cb892b',	'Jean',	'Dupont',	'1992-03-03',	'c219f71d-ef14-417a-8223-b897b3a51f64'),
('aa0b00b6-02cc-4b35-a9a4-99905693597e',	'Jean',	'Dupont',	'1993-04-04',	'2ec072e5-0c7d-4377-9d67-898c46fb73b9'),
('8a4f7f95-017c-4c2c-873c-39490bb27b1d',	'Jean',	'Dupont',	'1994-05-05',	'd4e1296e-98eb-4b5b-a470-d818b9b51db9'),
('1563a849-da40-4307-844c-7a76bc812a0c',	'Jean',	'Dupont',	'1995-06-06',	'03e99762-848b-47ac-9b33-225ab6def832'),
('42c092b1-47da-4f25-a548-d2551a383240',	'Jean',	'Dupont',	'1996-07-07',	'53af8f15-9de3-44d4-b848-15dc898bb9d3'),
('63985683-4cd7-4be0-bece-617735408f1f',	'Jean',	'Dupont',	'1997-08-08',	'9bd0799c-99f7-4449-8879-5302b3687a36'),
('7844f0bf-1d9a-45a7-b6d4-60b1ec3cf518',	'Jean',	'Dupont',	'1998-09-09',	'9d7e85e5-0969-43f2-8670-3a9d5a765f9d'),
('85d4385b-f2b5-4936-adc6-6f35dbb1c113',	'Jean',	'Dupont',	'1999-10-10',	'82fe462b-a4f1-4803-a3e8-29083185a16a'),
('9da0b75d-d77d-4efc-8afb-caf593a14572',	'Jean',	'Dupont',	'2000-11-11',	'3ffb763a-380e-4c68-8fb6-2427fc163ec9'),
('add0bca2-4094-4ab5-b5cb-1e7141755d5b',	'Jean',	'Dupont',	'2001-12-12',	'30ac3c2a-8b9e-422d-a5f4-871a8c002cc3'),
('cd32f7a4-f431-4e84-933f-cb1ede6f4b09',	'Jean',	'Dupont',	'2002-01-13',	'c4c8638c-0a58-4662-915e-58471c362aba'),
('8d9bba0f-7176-43cb-9132-1dec63a7ff0e',	'Jean',	'Dupont',	'2003-02-14',	'3a9bf8c7-e0f1-4664-9ec9-094750a1c7cf'),
('f589f4b3-6977-4c36-a22a-e9fcb20c4cfd',	'Jean',	'Dupont',	'2004-03-15',	'2b3e1895-828a-48d8-9e48-5bb57da004a1'),
('1f202482-9bd3-4cc7-970f-82fa83ae4332',	'Jean',	'Dupont',	'2005-04-16',	'73647573-a150-44df-9357-f32fe5939761'),
('2df9012f-a68f-4241-ab3b-0eaf0c409114',	'Jean',	'Dupont',	'2006-05-17',	'a85fc9ab-d5b1-4ce2-8da4-46dfbe0b4cc5'),
('4f8d8eb2-012d-4ce6-aa49-150a5882c35c',	'Jean',	'Dupont',	'2007-06-18',	'ad1aa4c2-68f4-4875-9bec-f55ff76d1320'),
('42c0bc2e-02a9-4c1b-b11b-9b6d5b013fc9',	'Jean',	'Dupont',	'2008-07-19',	'226f325a-b08e-4504-82f9-f92e1233d363'),
('337479b8-91d7-45b2-b406-f5dab8fb33e0',	'Jean',	'Dupont',	'2009-08-20',	'd826e6fc-f5a0-429a-a8f9-8ca8e33598da');

DROP TABLE IF EXISTS "ssn";
CREATE TABLE "public"."ssn" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "number" character varying(15) NOT NULL,
    CONSTRAINT "PK_fd9f1c91cf6bcd38ae0b7dfccc2" PRIMARY KEY ("id")
);

INSERT INTO "ssn" ("id", "number") VALUES
('9f52541f-6fd1-46f6-82e5-9e03144af896',	'123-45-6789'),
('e0eb73a4-7b3c-46bb-af57-870505fc035d',	'987-65-4321'),
('c219f71d-ef14-417a-8223-b897b3a51f64',	'111-22-3333'),
('2ec072e5-0c7d-4377-9d67-898c46fb73b9',	'444-55-6666'),
('d4e1296e-98eb-4b5b-a470-d818b9b51db9',	'777-88-9999'),
('03e99762-848b-47ac-9b33-225ab6def832',	'222-33-4444'),
('53af8f15-9de3-44d4-b848-15dc898bb9d3',	'555-66-7777'),
('9bd0799c-99f7-4449-8879-5302b3687a36',	'888-99-0000'),
('9d7e85e5-0969-43f2-8670-3a9d5a765f9d',	'333-44-5555'),
('82fe462b-a4f1-4803-a3e8-29083185a16a',	'666-77-8888'),
('3ffb763a-380e-4c68-8fb6-2427fc163ec9',	'999-00-1111'),
('30ac3c2a-8b9e-422d-a5f4-871a8c002cc3',	'444-55-6666'),
('c4c8638c-0a58-4662-915e-58471c362aba',	'777-88-0000'),
('3a9bf8c7-e0f1-4664-9ec9-094750a1c7cf',	'222-33-5555'),
('2b3e1895-828a-48d8-9e48-5bb57da004a1',	'555-66-9999'),
('73647573-a150-44df-9357-f32fe5939761',	'888-99-1111'),
('a85fc9ab-d5b1-4ce2-8da4-46dfbe0b4cc5',	'333-44-7777'),
('ad1aa4c2-68f4-4875-9bec-f55ff76d1320',	'666-77-0000'),
('226f325a-b08e-4504-82f9-f92e1233d363',	'999-00-2222'),
('d826e6fc-f5a0-429a-a8f9-8ca8e33598da',	'123-45-0000');

ALTER TABLE ONLY "public"."patient" ADD CONSTRAINT "FK_55747a4dfc143fc3d34307ff056" FOREIGN KEY (ssn_id) REFERENCES ssn(id) NOT DEFERRABLE;