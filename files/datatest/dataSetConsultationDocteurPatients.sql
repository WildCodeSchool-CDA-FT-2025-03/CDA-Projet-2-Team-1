-- Adminer 5.2.1 PostgreSQL 17.4 dump

DROP TABLE IF EXISTS "city";
CREATE TABLE "public"."city" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "name" character varying(128) NOT NULL,
    "zip_code" character varying(16) NOT NULL,
    CONSTRAINT "PK_b222f51ce26f7e5ca86944a6739" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "city" ("id", "name", "zip_code") VALUES
('11111111-1111-1111-1111-111111111111',	'Paris',	'75000'),
('22222222-2222-2222-2222-222222222222',	'Lyon',	'69000'),
('33333333-3333-3333-3333-333333333333',	'Marseille',	'13000'),
('44444444-4444-4444-4444-444444444444',	'Lille',	'59000'),
('55555555-5555-5555-5555-555555555555',	'Toulouse',	'31000'),
('790321b2-3765-4447-bda9-cad86126999c',	'Ain',	'01000'),
('f04b4168-8d98-44ca-a286-ceab028de146',	'Aisne',	'02000'),
('3f87af63-9990-4537-95f5-33ce278ecdff',	'Allier',	'03000'),
('f3cb570c-759c-4de6-adf3-5586360a0ac6',	'Alpes-de-Haute-Provence',	'04000'),
('fc7ac145-62a0-41b0-96ec-05fcedf62eb7',	'Hautes-Alpes',	'05000'),
('1ee150fe-569e-4016-9e25-8767e8006376',	'Alpes-Maritimes',	'06000'),
('ffa6298c-ce06-4c25-9464-91fe48b00b60',	'Ardèche',	'07000'),
('ba03f3f5-a770-47bd-bd26-d862f31c0564',	'Ardennes',	'08000'),
('b8f00549-8124-4788-a531-a72d1b414029',	'Ariège',	'09000'),
('76dd465c-9c54-43d1-96b6-b020c5a571a2',	'Aube',	'10000'),
('964adbd8-e83f-4132-ada8-eb1c90faa2c6',	'Aude',	'11000'),
('d13313c9-750c-4906-9506-5cf241944bd2',	'Aveyron',	'12000'),
('9d397275-e05d-4e9e-acb0-7f1bc7a5bed1',	'Bouches-du-Rhône',	'13000'),
('e4b39a55-348b-4f5d-a234-27955016179c',	'Calvados',	'14000'),
('59321b81-931b-4fc8-86c7-88846e0d51fe',	'Cantal',	'15000'),
('c3947049-9bac-4d8e-95a6-6d87e410ecd8',	'Charente',	'16000'),
('faa881bc-166d-4930-9d62-9009736475c6',	'Charente-Maritime',	'17000'),
('f1fba268-7eb1-4ac2-9718-7a3748be0ec4',	'Cher',	'18000'),
('f6eb59e5-3e57-4d0c-aa00-483cdf426eef',	'Corrèze',	'19000'),
('76c28dfe-94fe-4abd-8cd9-147a64bafc83',	'Côte-d''Or',	'21000'),
('7f7222b8-c179-471a-aff4-f20be77f9aa2',	'Côtes-d''Armor',	'22000'),
('593bad64-e7ce-4a31-9d8c-a08d51304231',	'Creuse',	'23000'),
('c07ac819-54e9-407a-a07f-50c772bfa7cf',	'Dordogne',	'24000'),
('de8923c3-0339-4b1d-b751-898797a325ad',	'Doubs',	'25000'),
('cae4e410-9d42-494f-8bf3-662254b50bd2',	'Drôme',	'26000'),
('5472c943-44cc-43a7-978e-ace6f490262f',	'Haute-Marne',	'92140'),
('8c9c7961-9068-4261-8a9f-40aceeb3728a',	'Mayenne',	'53100'),
('fe889159-7ae8-4f76-878c-20892c53f234',	'Meurthe-et-Moselle',	'54000'),
('6d3ecf49-dc8f-44ca-a782-23d228514020',	'Meuse',	'55000'),
('e58fac8a-f81b-4ea2-b83e-a1fc0bf32b57',	'Morbihan',	'56000'),
('8aec7181-de4b-4a99-84e0-60873c6bf57f',	'Moselle',	'57000'),
('7afc08a1-858a-47b8-9633-94a12cc4148f',	'Nièvre',	'58000'),
('3bc7ca1d-b2b0-4930-b663-4972164b0fa5',	'Nord',	'59000'),
('c0b72fb7-d4d1-4889-a83f-a20c2440b516',	'Oise',	'60000'),
('c518799e-1b0c-40ac-af3c-4bcd29ff3cc9',	'Orne',	'61000'),
('0d080e3b-dd68-4747-a370-d46cc823d8e7',	'Pas-de-Calais',	'62000'),
('0e1c4b18-8037-4928-a265-288f4e7795c7',	'Puy-de-Dôme',	'63000'),
('a7d59dfd-4029-4ac6-8530-560a6c931250',	'Pyrénées-Atlantiques',	'64000'),
('a39ed339-6021-4576-8173-1ca1cc9fe1c8',	'Hautes-Pyrénées',	'65000'),
('b80f646d-786d-4608-bac6-abc8067e8dfd',	'Pyrénées-Orientales',	'66000'),
('74952f03-2f8c-4a15-b16a-b32b9050e074',	'Bas-Rhin',	'67000'),
('208d6018-a4af-4045-af4c-8745f38f6d86',	'Haut-Rhin',	'68000'),
('fbe99bdf-333d-4dc9-9ea4-8ada41ca5359',	'Rhône',	'69000'),
('f6fed6ce-d97f-4544-99f1-fbaa30ba3078',	'Haute-Saône',	'70000'),
('a5f8ed94-2317-4775-8e24-2fb88cc29d3e',	'Saône-et-Loire',	'71000'),
('7f8a231b-fc6f-4649-b926-b5c6720a473f',	'Sarthe',	'72000'),
('a8891d94-9383-4a71-8848-b905483a5cae',	'Savoie',	'73000'),
('30892a05-b233-407c-9efc-59ca060a6235',	'Haute-Savoie',	'74000'),
('edf60f0b-ff39-47e3-a32e-48f5300390fb',	'Paris',	'75000'),
('79f6f452-de15-49ea-a569-d341668ebe4f',	'Seine-Maritime',	'76000'),
('8069c7f4-8284-4d03-8638-336d7cdcaed5',	'Seine-et-Marne',	'77000'),
('8a0f3cd8-e5f4-4d5c-be16-f51fc978b9be',	'Yvelines',	'78000'),
('e94a2a9c-6d36-4851-a2eb-7982d9db0d01',	'Deux-Sèvres',	'79000'),
('924594b7-ba07-4d74-bc9d-11602b0271e6',	'Somme',	'80000'),
('d391fe46-9a30-4f8f-b96f-5d5c0e310c59',	'Tarn',	'81000'),
('dd3e7e9a-92a7-4e58-9290-debf1a50d8d7',	'Tarn-et-Garonne',	'82000'),
('0f35ed8a-09a2-4932-86a6-2bbb058d9339',	'Var',	'83000'),
('732f5e97-7d31-4782-9d71-beac56d33086',	'Vaucluse',	'84000'),
('dbdc0af1-c841-40d7-bbfa-26a70dc6dfb8',	'Vendée',	'85000'),
('fef34f6d-2df6-40af-9ab7-eacf94196913',	'Vienne',	'86000'),
('f5c06613-2286-49d6-951e-894681bb6d52',	'Haute-Vienne',	'87000'),
('bf032b12-14c1-46c4-a2d8-9d6691784d9d',	'Vosges',	'88000'),
('659f2155-ddd2-482f-8ef5-f63c1dbd01f4',	'Yonne',	'89000'),
('94918e9f-13fe-4f61-a032-654a40ccd8e8',	'Territoire de Belfort',	'90000'),
('4d91f701-fab7-424b-ab12-21bf0c562d2d',	'Essonne',	'91000'),
('95e44bd4-e850-4616-acf0-3d4fb6d2f7e0',	'Hauts-de-Seine',	'92000'),
('294bae5d-9aff-4188-8bb6-4022be69ad33',	'Seine-Saint-Denis',	'93000'),
('fe0c70e4-b5f9-43c2-a9af-4bb6a5e82a31',	'Val-de-Marne',	'94000'),
('bc97a77e-f2b2-4db1-856a-d59f0ba59096',	'Val-d''Oise',	'95000'),
('7b54a5fd-6e2c-4047-b8c5-ae64bb0706a8',	'Guadeloupe',	'97100'),
('68a65e91-78d3-4cd0-8fd0-1fc67c614f77',	'Eure',	'27000'),
('aaac133a-c3d5-43bd-ada1-8ff1e5f8afe0',	'Eure-et-Loir',	'28000'),
('e8511dac-9bf8-4936-9b61-ec209f202762',	'Finistère',	'29000'),
('a7e7d189-9748-451a-b9a4-0ebb42cea190',	'Gard',	'30000'),
('3ea57390-321c-436b-8dc3-dfa41d9694ac',	'Haute-Garonne',	'31000'),
('8af86006-e208-4fe4-91d7-f66a305d85e4',	'Gers',	'32000'),
('73199461-7ad3-4bc1-af9c-bdc0f26b668a',	'Gironde',	'33000'),
('9db0ad6d-68e8-4fc8-9b8a-0869b5d4423e',	'Hérault',	'34000'),
('d28bef12-4a44-43e5-914c-3b44a058e06f',	'Ille-et-Vilaine',	'35000'),
('eb9ba8f7-b64d-4b2d-b06c-4941a7739864',	'Indre',	'36000'),
('7b99113c-0239-4f8a-86ca-d95968dc43de',	'Indre-et-Loire',	'37000'),
('bed06503-fde9-4ea2-b9f3-dba7bf4b4b1e',	'Isère',	'38000'),
('e8147294-8ff9-44a0-b213-d1ac40bc58d4',	'Jura',	'39000'),
('d314b06c-a4d9-4d6b-aaa3-4a93df0f7c86',	'Landes',	'40000'),
('3e8dc17a-9b7f-4cb2-a89d-d0b445429a00',	'Loir-et-Cher',	'41000'),
('e0265bc1-7281-4749-aac0-c9e57f119560',	'Loire',	'42000'),
('fd52b49e-c229-4f99-a5aa-fea452815cc0',	'Haute-Loire',	'43000'),
('eb097704-d5ca-484a-950c-d5c6f41019e4',	'Loire-Atlantique',	'44000'),
('0d722c62-6202-4f6e-9625-6afdd185d5bb',	'Loiret',	'45000'),
('dcd36d84-7e9d-4814-bb1b-c6bfcce96a71',	'Lot',	'46000'),
('84520314-54a1-4cc9-9174-6e723f5e9a3a',	'Lot-et-Garonne',	'47000'),
('2fa6df63-9c13-4efc-9dfc-d0e15082299c',	'Lozère',	'48000'),
('d112079b-a4cb-4898-9c58-96bf1b62c211',	'Maine-et-Loire',	'49000'),
('7f6cf7cc-b38e-46b0-a99a-4b3a233db7aa',	'Manche',	'50000'),
('a87a95d6-10d9-4301-ad8c-2579d3b942b1',	'Marne',	'51000'),
('359382ed-9615-4941-bc8c-728233b6addc',	'Martinique',	'97200'),
('bc114b89-52bc-4638-98ad-652022838cf9',	'Guyane',	'97300'),
('63026c21-5972-43d7-84fd-c2d189f977bd',	'La Réunion',	'97400'),
('53d70ef0-1465-429d-83d2-1bc028f3f27b',	'Mayotte',	'97600');

DROP TABLE IF EXISTS "consultation";
CREATE TABLE "public"."consultation" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "date_start" timestamptz NOT NULL,
    "date_end" timestamptz NOT NULL,
    "patient_id" uuid NOT NULL,
    "doctor_assigned_id" uuid NOT NULL,
    "reason" character varying(255),
    "additional_notes" text,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "updated_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "PK_5203569fac28a4a626c42abe70b" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "consultation" ("id", "date_start", "date_end", "patient_id", "doctor_assigned_id", "reason", "additional_notes", "created_at", "updated_at") VALUES
('0b5e00b2-6d69-4ea5-b1e0-dc8fc8fb7471',	'2025-06-05 08:00:00+00',	'2025-06-05 08:30:00+00',	'11111111-1111-1111-1111-000000000010',	'ab787dfd-089b-48ed-bf0a-b24e1a80084d',	NULL,	NULL,	'2025-06-05 12:50:10.311129+00',	'2025-06-05 12:50:10.311129+00'),
('ed5c9068-c764-452a-afcd-235bca98b045',	'2025-06-05 09:00:00+00',	'2025-06-05 09:30:00+00',	'11111111-1111-1111-1111-000000000011',	'ab787dfd-089b-48ed-bf0a-b24e1a80084d',	NULL,	NULL,	'2025-06-05 12:50:10.311129+00',	'2025-06-05 12:50:10.311129+00'),
('a4c96727-8e11-49c4-a5a5-53e8367cc3b2',	'2025-06-05 10:00:00+00',	'2025-06-05 10:30:00+00',	'11111111-1111-1111-1111-000000000020',	'ab787dfd-089b-48ed-bf0a-b24e1a80084d',	NULL,	NULL,	'2025-06-05 12:50:10.311129+00',	'2025-06-05 12:50:10.311129+00'),
('9e84a80b-7c2f-4fd7-8eb0-f70d56b4b4a6',	'2025-06-06 16:00:00+00',	'2025-06-06 16:30:00+00',	'11111111-1111-1111-1111-000000000010',	'b6de3a5b-d85a-4a51-a52f-f5bfef2620d8',	NULL,	NULL,	'2025-06-05 12:50:10.311129+00',	'2025-06-05 12:50:10.311129+00'),
('a5936f95-24c6-401e-8ca1-da7cd15856c8',	'2025-06-05 07:00:00+00',	'2025-06-05 07:30:00+00',	'11111111-1111-1111-1111-000000000010',	'ab787dfd-089b-48ed-bf0a-b24e1a80084d',	'consultation',	'salut',	'2025-06-05 14:05:28.629363+00',	'2025-06-05 14:05:28.629363+00'),
('741d981b-6a40-454e-b22e-31433295683b',	'2025-06-08 07:30:00+00',	'2025-06-08 08:00:00+00',	'11111111-1111-1111-1111-000000000010',	'6ef2bcdd-4b50-456c-b78a-6d137664dfb5',	'urgence',	NULL,	'2025-06-05 14:27:04.79089+00',	'2025-06-05 14:27:04.79089+00'),
('b5cb3392-e2a5-4a00-9f6d-32c5a45a72d2',	'2025-06-13 07:00:00+00',	'2025-06-13 07:30:00+00',	'11111111-1111-1111-1111-000000000010',	'3124a1e6-c138-490e-873d-51a25ac4e690',	'suivi',	'test messages',	'2025-06-05 14:30:36.000939+00',	'2025-06-05 14:30:36.000939+00'),
('53982478-e7d4-48f6-9185-0a5f622ad369',	'2025-06-06 07:30:00+00',	'2025-06-06 08:00:00+00',	'11111111-1111-1111-1111-000000000010',	'f66f4fc5-c915-4037-8b94-0b8bca771ba7',	'controle',	NULL,	'2025-06-05 15:27:39.221805+00',	'2025-06-05 15:27:39.221805+00');

DROP TABLE IF EXISTS "doctor";
CREATE TABLE "public"."doctor" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "firstname" character varying(100) NOT NULL,
    "lastname" character varying(100) NOT NULL,
    "email" character varying(255),
    "phone" character varying(20),
    "specialization" character varying(150),
    "isActive" boolean DEFAULT true NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "updated_at" timestamptz DEFAULT now() NOT NULL,
    "service_id" uuid,
    CONSTRAINT "PK_ee6bf6c8de78803212c548fcb94" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "doctor" ("id", "firstname", "lastname", "email", "phone", "specialization", "isActive", "created_at", "updated_at", "service_id") VALUES
('45f19635-9c96-4f61-a744-acfc40bc871d',	'Florence',	'Lopez',	'florence.lopez@hopital.fr',	'01.23.45.68.06',	'Chirurgie vitréo-rétinienne',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('238db63e-9441-48a2-85fb-b5a3207b96bd',	'Thomas',	'Mercier',	'thomas.mercier@hopital.fr',	'01.23.45.68.07',	'Neurologie vasculaire',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('d6250832-e917-458d-b74b-270b786bec60',	'Nathalie',	'André',	'nathalie.andre@hopital.fr',	'01.23.45.68.08',	'Maladie de Parkinson',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('6a0f049d-a488-4816-b887-48af06ca78e5',	'Philippe',	'David',	'philippe.david@hopital.fr',	'01.23.45.68.09',	'Épileptologie',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('327e9507-1cd3-4075-b97d-78c428be70ba',	'Emma',	'Müller',	'emma.muller@hopital.fr',	'01.23.45.68.10',	'Pédiatrie générale',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('590d6b97-d8a1-4242-b274-7759154e5d98',	'Lucas',	'Richard',	'lucas.richard@hopital.fr',	'01.23.45.68.11',	'Néonatologie',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('3af94a00-ebbb-40d5-8f1d-ede6efcfbacf',	'Hugo',	'Morel',	'hugo.morel@hopital.fr',	'01.23.45.68.13',	'Chirurgie du genou',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('b6de3a5b-d85a-4a51-a52f-f5bfef2620d8',	'Pierre',	'Martin',	'pierre.martin@hopital.fr',	'01.23.45.67.89',	'Cardiologue interventionnel',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('3f482201-36d5-4228-a433-906ff71a0a58',	'Jean-Claude',	'Moreau',	'jean-claude.moreau@hopital.fr',	'01.23.45.67.91',	'Cardiologie pédiatrique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('f346e0b1-252c-4af5-b903-41218bae4a47',	'Sophie',	'Leroy',	'sophie.leroy@hopital.fr',	'01.23.45.67.92',	'Gynécologie obstétrique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('6ef2bcdd-4b50-456c-b78a-6d137664dfb5',	'Claire',	'Bernard',	'claire.bernard@hopital.fr',	'01.23.45.67.93',	'Médecine de la reproduction',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('37ac0920-f34f-474e-89e7-9cfe107af641',	'Isabelle',	'Rousseau',	'isabelle.rousseau@hopital.fr',	'01.23.45.67.94',	'Échographie obstétricale',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('f66f4fc5-c915-4037-8b94-0b8bca771ba7',	'Jean',	'Fontaine',	'jean.fontaine@hopital.fr',	'01.23.45.67.95',	'Psychiatrie générale',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'a51f12f2-672d-4c09-bb38-05e085cafb16'),
('9ca54e8b-6569-4edd-9ce2-c4928fa6a263',	'Paul',	'Girard',	'paul.girard@hopital.fr',	'01.23.45.67.96',	'Psychothérapie cognitive',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'a51f12f2-672d-4c09-bb38-05e085cafb16'),
('918e37fd-fdc3-4d94-8bc5-3e81e4be927e',	'Anne',	'Leclerc',	'anne.leclerc@hopital.fr',	'01.23.45.67.97',	'Psychiatrie de l''enfant',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'a51f12f2-672d-4c09-bb38-05e085cafb16'),
('ab787dfd-089b-48ed-bf0a-b24e1a80084d',	'Luc',	'Garcia',	'luc.garcia@hopital.fr',	'01.23.45.67.98',	'Rhumatologie inflammatoire',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'9bff3268-baa9-4425-8da4-79250706b06d'),
('a6b9db70-c7af-4a60-87d1-514fe9eea755',	'Michel',	'Roux',	'michel.roux@hopital.fr',	'01.23.45.68.00',	'Ostéoporose et métabolisme osseux',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'9bff3268-baa9-4425-8da4-79250706b06d'),
('9ca19c89-a139-4bed-8e7c-62cb7faa8c8d',	'Julie',	'Blanc',	'julie.blanc@hopital.fr',	'01.23.45.68.01',	'Dermatologie esthétique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('08c32d75-3e0d-4dda-b67e-3c1a9f46be6d',	'Marc',	'Simon',	'marc.simon@hopital.fr',	'01.23.45.68.02',	'Dermatologie oncologique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('d31903dd-d2f3-4456-834b-461c5316b563',	'Camille',	'Robert',	'camille.robert@hopital.fr',	'01.23.45.68.04',	'Chirurgie de la cataracte',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('910428c6-1ade-42ea-ac5a-28d3d864f3c7',	'Léa',	'Fournier',	'lea.fournier@hopital.fr',	'01.23.45.67.99',	'Rhumatologie sportive',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'9bff3268-baa9-4425-8da4-79250706b06d'),
('8f77a313-2232-4a65-b005-066dfe1d86ff',	'Léa',	'Fournier',	'lea.fournier@hopital.fr',	'01.23.45.68.14',	'Traumatologie sportive',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('9863c942-a6fb-4b1f-aa89-009f52a6068d',	'Antoine',	'Masson',	'antoine.masson@hopital.fr',	'01.23.45.68.15',	'Chirurgie du rachis',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('eb945787-8463-4f05-aeb1-f69b1b7c22d1',	'Mathilde',	'Sanchez',	'mathilde.sanchez@hopital.fr',	'01.23.45.68.16',	'Radiologie interventionnelle',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('adcb888f-91b6-47cc-84e6-e30eba86a943',	'Valérie',	'Perrin',	'valerie.perrin@hopital.fr',	'01.23.45.67.90',	'Électrophysiologie cardiaque',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('fc18d98b-7fdf-4215-b853-2a55aa8b4537',	'Sylvie',	'Durand',	'sylvie.durand@hopital.fr',	'01.23.45.68.20',	'Gynécologue en congé',	'0',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('6864c07c-58bf-4f71-9936-bd22f60ae79f',	'Luc',	'Leroy',	'julie.moreau@hopital.fr',	'01.23.45.68.03',	'Dermatologie pédiatrique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('c8bbba0f-8397-4f61-90c4-c0e6cf07a7a1',	'Sophie',	'Moreau',	'anne.bernard@hopital.fr',	'01.23.45.68.05',	'Ophtalmologie pédiatrique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('d614358e-8047-49cd-86d9-f4d4d1ad241d',	'Marie',	'Robert',	'claire.robert@hopital.fr',	'01.23.45.68.12',	'Pédiatrie d''urgence',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('7592299b-1d10-4847-a645-094161709160',	'Pierre',	'Martin',	'pierre.martin@hopital.fr',	'01.23.45.68.19',	'Ex-cardiologue',	'0',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('921c6f0c-ec1d-47f1-97f5-57f9d6820d8b',	'Nicolas',	'Noel',	'nicolas.noel@hopital.fr',	'01.23.45.68.17',	'IRM neurologique',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('3124a1e6-c138-490e-873d-51a25ac4e690',	'Valérie',	'Perrin',	'valerie.perrin@hopital.fr',	'01.23.45.68.18',	'Échographie cardiaque',	'1',	'2025-06-04 16:47:13.610677+00',	'2025-06-04 16:47:13.610677+00',	'3672b6af-f267-431b-9750-312ba5715d59');

DROP TABLE IF EXISTS "patient";
CREATE TABLE "public"."patient" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "firstname" character varying(64) NOT NULL,
    "lastname" character varying(64) NOT NULL,
    "birthdate" timestamptz NOT NULL,
    "gender" character varying(16) NOT NULL,
    "email" character varying(128) NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "updated_at" timestamptz DEFAULT now() NOT NULL,
    "ssn_id" uuid NOT NULL,
    "city_id" uuid NOT NULL,
    CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "patient" ("id", "firstname", "lastname", "birthdate", "gender", "email", "created_at", "updated_at", "ssn_id", "city_id") VALUES
('11111111-1111-1111-1111-000000000001',	'Jean',	'Dupont',	'1980-01-01 00:00:00+00',	'M',	'jean.dupont@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'9f52541f-6fd1-46f6-82e5-9e03144af896',	'790321b2-3765-4447-bda9-cad86126999c'),
('11111111-1111-1111-1111-000000000002',	'Marie',	'Curie',	'1867-11-07 00:00:00+00',	'F',	'marie.curie@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'e0eb73a4-7b3c-46bb-af57-870505fc035d',	'f04b4168-8d98-44ca-a286-ceab028de146'),
('11111111-1111-1111-1111-000000000003',	'Paul',	'Morel',	'1975-05-12 00:00:00+00',	'M',	'paul.morel@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'c219f71d-ef14-417a-8223-b897b3a51f64',	'3f87af63-9990-4537-95f5-33ce278ecdff'),
('11111111-1111-1111-1111-000000000004',	'Sophie',	'Martin',	'1990-03-20 00:00:00+00',	'F',	'sophie.martin@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'2ec072e5-0c7d-4377-9d67-898c46fb73b9',	'f3cb570c-759c-4de6-adf3-5586360a0ac6'),
('11111111-1111-1111-1111-000000000005',	'Luc',	'Durand',	'1985-09-15 00:00:00+00',	'M',	'luc.durand@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'd4e1296e-98eb-4b5b-a470-d818b9b51db9',	'fc7ac145-62a0-41b0-96ec-05fcedf62eb7'),
('11111111-1111-1111-1111-000000000006',	'Camille',	'Robert',	'1992-06-10 00:00:00+00',	'F',	'camille.robert@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'03e99762-848b-47ac-9b33-225ab6def832',	'1ee150fe-569e-4016-9e25-8767e8006376'),
('11111111-1111-1111-1111-000000000007',	'Julien',	'Lemoine',	'1988-04-18 00:00:00+00',	'M',	'julien.lemoine@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'53af8f15-9de3-44d4-b848-15dc898bb9d3',	'ffa6298c-ce06-4c25-9464-91fe48b00b60'),
('11111111-1111-1111-1111-000000000008',	'Claire',	'Faure',	'1991-07-22 00:00:00+00',	'F',	'claire.faure@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'9bd0799c-99f7-4449-8879-5302b3687a36',	'ba03f3f5-a770-47bd-bd26-d862f31c0564'),
('11111111-1111-1111-1111-000000000009',	'Hugo',	'Garcia',	'1987-12-03 00:00:00+00',	'M',	'hugo.garcia@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'9d7e85e5-0969-43f2-8670-3a9d5a765f9d',	'b8f00549-8124-4788-a531-a72d1b414029'),
('11111111-1111-1111-1111-000000000010',	'Emma',	'Benoit',	'1993-11-30 00:00:00+00',	'F',	'emma.benoit@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'82fe462b-a4f1-4803-a3e8-29083185a16a',	'76dd465c-9c54-43d1-96b6-b020c5a571a2'),
('11111111-1111-1111-1111-000000000011',	'Louis',	'Bernard',	'1994-02-17 00:00:00+00',	'M',	'louis.bernard@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'3ffb763a-380e-4c68-8fb6-2427fc163ec9',	'964adbd8-e83f-4132-ada8-eb1c90faa2c6'),
('11111111-1111-1111-1111-000000000012',	'Alice',	'Giraud',	'1986-08-08 00:00:00+00',	'F',	'alice.giraud@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'30ac3c2a-8b9e-422d-a5f4-871a8c002cc3',	'd13313c9-750c-4906-9506-5cf241944bd2'),
('11111111-1111-1111-1111-000000000013',	'Noé',	'Gauthier',	'1990-10-25 00:00:00+00',	'M',	'noe.gauthier@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'c4c8638c-0a58-4662-915e-58471c362aba',	'9d397275-e05d-4e9e-acb0-7f1bc7a5bed1'),
('11111111-1111-1111-1111-000000000014',	'Julie',	'Roux',	'1995-03-03 00:00:00+00',	'F',	'julie.roux@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'3a9bf8c7-e0f1-4664-9ec9-094750a1c7cf',	'e4b39a55-348b-4f5d-a234-27955016179c'),
('11111111-1111-1111-1111-000000000015',	'Antoine',	'Fabre',	'1983-05-09 00:00:00+00',	'M',	'antoine.fabre@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'2b3e1895-828a-48d8-9e48-5bb57da004a1',	'59321b81-931b-4fc8-86c7-88846e0d51fe'),
('11111111-1111-1111-1111-000000000016',	'Laura',	'Philippe',	'1989-01-29 00:00:00+00',	'F',	'laura.philippe@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'73647573-a150-44df-9357-f32fe5939761',	'c3947049-9bac-4d8e-95a6-6d87e410ecd8'),
('11111111-1111-1111-1111-000000000017',	'Mathieu',	'Leclerc',	'1982-04-02 00:00:00+00',	'M',	'mathieu.leclerc@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'a85fc9ab-d5b1-4ce2-8da4-46dfbe0b4cc5',	'faa881bc-166d-4930-9d62-9009736475c6'),
('11111111-1111-1111-1111-000000000018',	'Eva',	'Girard',	'1996-07-12 00:00:00+00',	'F',	'eva.girard@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'ad1aa4c2-68f4-4875-9bec-f55ff76d1320',	'f1fba268-7eb1-4ac2-9718-7a3748be0ec4'),
('11111111-1111-1111-1111-000000000019',	'Lucas',	'Marchand',	'1981-06-21 00:00:00+00',	'M',	'lucas.marchand@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'226f325a-b08e-4504-82f9-f92e1233d363',	'f6eb59e5-3e57-4d0c-aa00-483cdf426eef'),
('11111111-1111-1111-1111-000000000020',	'Anaïs',	'Chevalier',	'1997-09-19 00:00:00+00',	'F',	'anais.chevalier@email.com',	'2025-06-04 16:41:35.071612+00',	'2025-06-04 16:41:35.071612+00',	'd826e6fc-f5a0-429a-a8f9-8ca8e33598da',	'76c28dfe-94fe-4abd-8cd9-147a64bafc83');

DROP TABLE IF EXISTS "rest";
CREATE TABLE "public"."rest" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "type" character varying(16) NOT NULL,
    "date_start" timestamptz NOT NULL,
    "date_end" timestamptz NOT NULL,
    "user_id" uuid NOT NULL,
    CONSTRAINT "PK_9f0a347c42e5e86efbd75a53966" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "service";
CREATE TABLE "public"."service" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "name" character varying(100) NOT NULL,
    "description" character varying(500),
    "isActive" boolean DEFAULT true NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "updated_at" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "service" ("id", "name", "description", "isActive", "created_at", "updated_at") VALUES
('3672b6af-f267-431b-9750-312ba5715d59',	'Gynécologie',	NULL,	'1',	'2025-06-04 16:41:35.05362+00',	'2025-06-04 16:41:35.05362+00'),
('a51f12f2-672d-4c09-bb38-05e085cafb16',	'Psychiatrie',	NULL,	'1',	'2025-06-04 16:41:35.05362+00',	'2025-06-04 16:41:35.05362+00'),
('9bff3268-baa9-4425-8da4-79250706b06d',	'Rhumatologie',	NULL,	'1',	'2025-06-04 16:41:35.05362+00',	'2025-06-04 16:41:35.05362+00');

DROP TABLE IF EXISTS "ssn";
CREATE TABLE "public"."ssn" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "number" character varying(15) NOT NULL,
    CONSTRAINT "PK_fd9f1c91cf6bcd38ae0b7dfccc2" PRIMARY KEY ("id")
) WITH (oids = false);

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
('3ffb763a-380e-4c68-8fb6-2427fc163ec9',	'999-00-1111'),
('30ac3c2a-8b9e-422d-a5f4-871a8c002cc3',	'444-55-6666'),
('c4c8638c-0a58-4662-915e-58471c362aba',	'777-88-0000'),
('3a9bf8c7-e0f1-4664-9ec9-094750a1c7cf',	'222-33-5555'),
('2b3e1895-828a-48d8-9e48-5bb57da004a1',	'555-66-9999'),
('73647573-a150-44df-9357-f32fe5939761',	'888-99-1111'),
('a85fc9ab-d5b1-4ce2-8da4-46dfbe0b4cc5',	'333-44-7777'),
('ad1aa4c2-68f4-4875-9bec-f55ff76d1320',	'666-77-0000'),
('226f325a-b08e-4504-82f9-f92e1233d363',	'999-00-2222'),
('d826e6fc-f5a0-429a-a8f9-8ca8e33598da',	'123-45-0000'),
('aaaaaaa1-0000-0000-0000-000000000001',	'123456789001'),
('aaaaaaa2-0000-0000-0000-000000000002',	'123456789002'),
('aaaaaaa3-0000-0000-0000-000000000003',	'123456789003'),
('aaaaaaa4-0000-0000-0000-000000000004',	'123456789004'),
('aaaaaaa5-0000-0000-0000-000000000005',	'123456789005'),
('aaaaaaa6-0000-0000-0000-000000000006',	'123456789006'),
('aaaaaaa7-0000-0000-0000-000000000007',	'123456789007'),
('aaaaaaa8-0000-0000-0000-000000000008',	'123456789008'),
('aaaaaaa9-0000-0000-0000-000000000009',	'123456789009'),
('aaaaaa10-0000-0000-0000-000000000010',	'123456789010'),
('aaaaaa11-0000-0000-0000-000000000011',	'123456789011'),
('aaaaaa12-0000-0000-0000-000000000012',	'123456789012'),
('aaaaaa13-0000-0000-0000-000000000013',	'123456789013'),
('aaaaaa14-0000-0000-0000-000000000014',	'123456789014'),
('aaaaaa15-0000-0000-0000-000000000015',	'123456789015'),
('aaaaaa16-0000-0000-0000-000000000016',	'123456789016'),
('aaaaaa17-0000-0000-0000-000000000017',	'123456789017'),
('aaaaaa18-0000-0000-0000-000000000018',	'123456789018'),
('aaaaaa19-0000-0000-0000-000000000019',	'123456789019'),
('aaaaaa20-0000-0000-0000-000000000020',	'123456789020'),
('82fe462b-a4f1-4803-a3e8-29083185a16a',	'294037512015622');

DROP TABLE IF EXISTS "user";
CREATE TABLE "public"."user" (
    "id" uuid DEFAULT uuid_generate_v4() NOT NULL,
    "firstname" character varying(64) NOT NULL,
    "lastname" character varying(64) NOT NULL,
    "created_at" timestamptz DEFAULT now() NOT NULL,
    "updated_at" timestamptz DEFAULT now() NOT NULL,
    "service_id" uuid NOT NULL,
    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "user" ("id", "firstname", "lastname", "created_at", "updated_at", "service_id") VALUES
('f346e0b1-252c-4af5-b903-41218bae4a47',	'Sophie',	'Leroy',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('6ef2bcdd-4b50-456c-b78a-6d137664dfb5',	'Claire',	'Bernard',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('37ac0920-f34f-474e-89e7-9cfe107af641',	'Isabelle',	'Rousseau',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('f66f4fc5-c915-4037-8b94-0b8bca771ba7',	'Jean',	'Fontaine',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'a51f12f2-672d-4c09-bb38-05e085cafb16'),
('9ca54e8b-6569-4edd-9ce2-c4928fa6a263',	'Paul',	'Girard',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'a51f12f2-672d-4c09-bb38-05e085cafb16'),
('918e37fd-fdc3-4d94-8bc5-3e81e4be927e',	'Anne',	'Leclerc',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'a51f12f2-672d-4c09-bb38-05e085cafb16'),
('ab787dfd-089b-48ed-bf0a-b24e1a80084d',	'Luc',	'Garcia',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'9bff3268-baa9-4425-8da4-79250706b06d'),
('910428c6-1ade-42ea-ac5a-28d3d864f3c7',	'Léa',	'Fournier',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'9bff3268-baa9-4425-8da4-79250706b06d'),
('a6b9db70-c7af-4a60-87d1-514fe9eea755',	'Michel',	'Roux',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'9bff3268-baa9-4425-8da4-79250706b06d'),
('b6de3a5b-d85a-4a51-a52f-f5bfef2620d8',	'Pierre',	'Martin',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('adcb888f-91b6-47cc-84e6-e30eba86a943',	'Valérie',	'Perrin',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('3f482201-36d5-4228-a433-906ff71a0a58',	'Jean-Claude',	'Moreau',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('9ca19c89-a139-4bed-8e7c-62cb7faa8c8d',	'Julie',	'Blanc',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('08c32d75-3e0d-4dda-b67e-3c1a9f46be6d',	'Marc',	'Simon',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('6864c07c-58bf-4f71-9936-bd22f60ae79f',	'Luc',	'Leroy',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('d31903dd-d2f3-4456-834b-461c5316b563',	'Camille',	'Robert',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('c8bbba0f-8397-4f61-90c4-c0e6cf07a7a1',	'Sophie',	'Moreau',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('45f19635-9c96-4f61-a744-acfc40bc871d',	'Florence',	'Lopez',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('238db63e-9441-48a2-85fb-b5a3207b96bd',	'Thomas',	'Mercier',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('d6250832-e917-458d-b74b-270b786bec60',	'Nathalie',	'André',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('6a0f049d-a488-4816-b887-48af06ca78e5',	'Philippe',	'David',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('327e9507-1cd3-4075-b97d-78c428be70ba',	'Emma',	'Müller',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('590d6b97-d8a1-4242-b274-7759154e5d98',	'Lucas',	'Richard',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('d614358e-8047-49cd-86d9-f4d4d1ad241d',	'Marie',	'Robert',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('3af94a00-ebbb-40d5-8f1d-ede6efcfbacf',	'Hugo',	'Morel',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('8f77a313-2232-4a65-b005-066dfe1d86ff',	'Léa',	'Fournier',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('9863c942-a6fb-4b1f-aa89-009f52a6068d',	'Antoine',	'Masson',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('eb945787-8463-4f05-aeb1-f69b1b7c22d1',	'Mathilde',	'Sanchez',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('921c6f0c-ec1d-47f1-97f5-57f9d6820d8b',	'Nicolas',	'Noel',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59'),
('3124a1e6-c138-490e-873d-51a25ac4e690',	'Valérie',	'Perrin',	'2025-06-05 07:41:09.236512+00',	'2025-06-05 07:57:09.82918+00',	'3672b6af-f267-431b-9750-312ba5715d59');

ALTER TABLE ONLY "public"."consultation" ADD CONSTRAINT "FK_7fd184445106e5e45173e09e627" FOREIGN KEY (doctor_assigned_id) REFERENCES "user"(id) ON DELETE CASCADE NOT DEFERRABLE;
ALTER TABLE ONLY "public"."consultation" ADD CONSTRAINT "FK_b8e02af7396968f02a9266cc7d5" FOREIGN KEY (patient_id) REFERENCES patient(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."doctor" ADD CONSTRAINT "FK_b19d5e8822d7b1afe7e9fbb9fea" FOREIGN KEY (service_id) REFERENCES service(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."patient" ADD CONSTRAINT "FK_55747a4dfc143fc3d34307ff056" FOREIGN KEY (ssn_id) REFERENCES ssn(id) NOT DEFERRABLE;
ALTER TABLE ONLY "public"."patient" ADD CONSTRAINT "FK_8fa07909b0a663bac8dd0637c8f" FOREIGN KEY (city_id) REFERENCES city(id) NOT DEFERRABLE;

ALTER TABLE ONLY "public"."rest" ADD CONSTRAINT "FK_3a2080a107c7aec01d335e016ec" FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE NOT DEFERRABLE;

ALTER TABLE ONLY "public"."user" ADD CONSTRAINT "FK_23248e7d44e03f37180fb8a7cf9" FOREIGN KEY (service_id) REFERENCES service(id) NOT DEFERRABLE;

-- 2025-06-05 15:47:47 UTC