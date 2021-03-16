--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-03-16 16:28:22 CET

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16433)
-- Name: Contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Contact" (
    id_contact integer NOT NULL,
    nom "char"[] NOT NULL,
    prenom "char"[] NOT NULL,
    "isPremary" boolean NOT NULL,
    tel_contact bigint NOT NULL,
    adr_rue_contact "char"[] NOT NULL,
    adr_cp_contact "char"[] NOT NULL,
    adr_ville_contact bigint NOT NULL,
    email_contact bigint NOT NULL,
    tel_bureau bigint NOT NULL,
    fonction "char"[] NOT NULL,
    id_exposant integer NOT NULL
);


ALTER TABLE public."Contact" OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16594)
-- Name: Editeur; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Editeur" (
    id_editeur integer NOT NULL,
    nom_editeur "char"[] NOT NULL
);


ALTER TABLE public."Editeur" OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 16420)
-- Name: Espace; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Espace" (
    id_espace integer NOT NULL,
    prix_m2 real NOT NULL,
    prix_table real NOT NULL,
    nb_table real NOT NULL,
    id_festival integer NOT NULL
);


ALTER TABLE public."Espace" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16536)
-- Name: EtatJeu; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EtatJeu" (
    id_etatjeu integer NOT NULL,
    libelle_etatjeu "char"[] NOT NULL
);


ALTER TABLE public."EtatJeu" OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 16478)
-- Name: EtatReservation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EtatReservation" (
    id_etat_reservation integer NOT NULL,
    libelle_etat_reservation "char"[] NOT NULL
);


ALTER TABLE public."EtatReservation" OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 16449)
-- Name: Exposant; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Exposant" (
    id_exposant integer NOT NULL,
    nom_exposant "char"[] NOT NULL,
    id_editeur integer
);


ALTER TABLE public."Exposant" OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16412)
-- Name: Festival; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Festival" (
    year date NOT NULL,
    name "char"[] NOT NULL,
    id_festival integer NOT NULL
);


ALTER TABLE public."Festival" OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16486)
-- Name: JeuReserve; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."JeuReserve" (
    "isAmene" boolean NOT NULL,
    "isEnvoye" boolean NOT NULL,
    "isRecu" boolean NOT NULL,
    place_plan boolean NOT NULL,
    retourne_prix real,
    nb_ani_besoin integer,
    nb_ani_amene integer,
    id_jeu integer NOT NULL,
    id_reservation integer NOT NULL,
    id_etatjeu integer NOT NULL
);


ALTER TABLE public."JeuReserve" OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16457)
-- Name: Jeux; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Jeux" (
    id_jeu integer NOT NULL,
    name_jeu "char"[] NOT NULL,
    "nbJoueurs_min" integer NOT NULL,
    "nbJoueurs_max" integer NOT NULL,
    "ageMin" integer NOT NULL,
    notice text,
    "Isprototype" boolean NOT NULL,
    duree integer NOT NULL,
    id_type integer NOT NULL,
    id_editeur integer NOT NULL
);


ALTER TABLE public."Jeux" OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16473)
-- Name: Reservation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Reservation" (
    date_emision_facture date NOT NULL,
    date_reservation date NOT NULL,
    id_reservation integer NOT NULL,
    prix_prestation real NOT NULL,
    date_paiment_facture date NOT NULL,
    id_etat_reservation integer NOT NULL,
    id_exposant integer NOT NULL,
    id_festival integer NOT NULL,
    id_espace integer NOT NULL
);


ALTER TABLE public."Reservation" OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16510)
-- Name: ReservationEspace; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."ReservationEspace" (
    id_reservation integer NOT NULL,
    id_espece integer NOT NULL,
    remise_espace real
);


ALTER TABLE public."ReservationEspace" OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16441)
-- Name: Suivi_contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Suivi_contact" (
    id_suivi integer NOT NULL,
    commentaire text,
    premier_contact date,
    deuxieme_contact date,
    troisieme_contact date,
    est_present boolean NOT NULL,
    cr_envoye boolean NOT NULL,
    id_festival integer NOT NULL,
    id_exposant integer NOT NULL
);


ALTER TABLE public."Suivi_contact" OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16465)
-- Name: Type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Type" (
    id_type integer NOT NULL,
    libelle_type "char"[] NOT NULL
);


ALTER TABLE public."Type" OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 16501)
-- Name: Zone; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Zone" (
    id_zone integer NOT NULL,
    name_zone "char"[] NOT NULL,
    id_espace integer NOT NULL
);


ALTER TABLE public."Zone" OWNER TO postgres;

--
-- TOC entry 3361 (class 0 OID 16433)
-- Dependencies: 202
-- Data for Name: Contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Contact" (id_contact, nom, prenom, "isPremary", tel_contact, adr_rue_contact, adr_cp_contact, adr_ville_contact, email_contact, tel_bureau, fonction, id_exposant) FROM stdin;
\.


--
-- TOC entry 3372 (class 0 OID 16594)
-- Dependencies: 213
-- Data for Name: Editeur; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Editeur" (id_editeur, nom_editeur) FROM stdin;
\.


--
-- TOC entry 3360 (class 0 OID 16420)
-- Dependencies: 201
-- Data for Name: Espace; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Espace" (id_espace, prix_m2, prix_table, nb_table, id_festival) FROM stdin;
\.


--
-- TOC entry 3371 (class 0 OID 16536)
-- Dependencies: 212
-- Data for Name: EtatJeu; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EtatJeu" (id_etatjeu, libelle_etatjeu) FROM stdin;
\.


--
-- TOC entry 3367 (class 0 OID 16478)
-- Dependencies: 208
-- Data for Name: EtatReservation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EtatReservation" (id_etat_reservation, libelle_etat_reservation) FROM stdin;
\.


--
-- TOC entry 3363 (class 0 OID 16449)
-- Dependencies: 204
-- Data for Name: Exposant; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Exposant" (id_exposant, nom_exposant, id_editeur) FROM stdin;
\.


--
-- TOC entry 3359 (class 0 OID 16412)
-- Dependencies: 200
-- Data for Name: Festival; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Festival" (year, name, id_festival) FROM stdin;
\.


--
-- TOC entry 3368 (class 0 OID 16486)
-- Dependencies: 209
-- Data for Name: JeuReserve; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."JeuReserve" ("isAmene", "isEnvoye", "isRecu", place_plan, retourne_prix, nb_ani_besoin, nb_ani_amene, id_jeu, id_reservation, id_etatjeu) FROM stdin;
\.


--
-- TOC entry 3364 (class 0 OID 16457)
-- Dependencies: 205
-- Data for Name: Jeux; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Jeux" (id_jeu, name_jeu, "nbJoueurs_min", "nbJoueurs_max", "ageMin", notice, "Isprototype", duree, id_type, id_editeur) FROM stdin;
\.


--
-- TOC entry 3366 (class 0 OID 16473)
-- Dependencies: 207
-- Data for Name: Reservation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Reservation" (date_emision_facture, date_reservation, id_reservation, prix_prestation, date_paiment_facture, id_etat_reservation, id_exposant, id_festival, id_espace) FROM stdin;
\.


--
-- TOC entry 3370 (class 0 OID 16510)
-- Dependencies: 211
-- Data for Name: ReservationEspace; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."ReservationEspace" (id_reservation, id_espece, remise_espace) FROM stdin;
\.


--
-- TOC entry 3362 (class 0 OID 16441)
-- Dependencies: 203
-- Data for Name: Suivi_contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Suivi_contact" (id_suivi, commentaire, premier_contact, deuxieme_contact, troisieme_contact, est_present, cr_envoye, id_festival, id_exposant) FROM stdin;
\.


--
-- TOC entry 3365 (class 0 OID 16465)
-- Dependencies: 206
-- Data for Name: Type; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Type" (id_type, libelle_type) FROM stdin;
\.


--
-- TOC entry 3369 (class 0 OID 16501)
-- Dependencies: 210
-- Data for Name: Zone; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Zone" (id_zone, name_zone, id_espace) FROM stdin;
\.


--
-- TOC entry 3183 (class 2606 OID 16440)
-- Name: Contact Contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact"
    ADD CONSTRAINT "Contact_pkey" PRIMARY KEY (id_contact);


--
-- TOC entry 3211 (class 2606 OID 16601)
-- Name: Editeur Editeur_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Editeur"
    ADD CONSTRAINT "Editeur_pkey" PRIMARY KEY (id_editeur);


--
-- TOC entry 3180 (class 2606 OID 16424)
-- Name: Espace Espace_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Espace"
    ADD CONSTRAINT "Espace_pkey" PRIMARY KEY (id_espace);


--
-- TOC entry 3209 (class 2606 OID 16543)
-- Name: EtatJeu EtatJeu_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EtatJeu"
    ADD CONSTRAINT "EtatJeu_pkey" PRIMARY KEY (id_etatjeu);


--
-- TOC entry 3199 (class 2606 OID 16485)
-- Name: EtatReservation EtatReservation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EtatReservation"
    ADD CONSTRAINT "EtatReservation_pkey" PRIMARY KEY (id_etat_reservation);


--
-- TOC entry 3188 (class 2606 OID 16456)
-- Name: Exposant Exposant_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Exposant"
    ADD CONSTRAINT "Exposant_pkey" PRIMARY KEY (id_exposant);


--
-- TOC entry 3178 (class 2606 OID 16419)
-- Name: Festival Festival_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Festival"
    ADD CONSTRAINT "Festival_pkey" PRIMARY KEY (id_festival);


--
-- TOC entry 3190 (class 2606 OID 16464)
-- Name: Jeux Jeux_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jeux"
    ADD CONSTRAINT "Jeux_pkey" PRIMARY KEY (id_jeu);


--
-- TOC entry 3206 (class 2606 OID 16514)
-- Name: ReservationEspace ReservationEspace_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ReservationEspace"
    ADD CONSTRAINT "ReservationEspace_pkey" PRIMARY KEY (id_reservation, id_espece);


--
-- TOC entry 3196 (class 2606 OID 16477)
-- Name: Reservation Reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY (id_reservation);


--
-- TOC entry 3185 (class 2606 OID 16448)
-- Name: Suivi_contact Suivi_contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suivi_contact"
    ADD CONSTRAINT "Suivi_contact_pkey" PRIMARY KEY (id_suivi);


--
-- TOC entry 3194 (class 2606 OID 16472)
-- Name: Type Type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Type"
    ADD CONSTRAINT "Type_pkey" PRIMARY KEY (id_type);


--
-- TOC entry 3204 (class 2606 OID 16508)
-- Name: Zone Zone_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Zone"
    ADD CONSTRAINT "Zone_pkey" PRIMARY KEY (id_zone);


--
-- TOC entry 3191 (class 1259 OID 16607)
-- Name: fki_id_editeur; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_editeur ON public."Jeux" USING btree (id_editeur);


--
-- TOC entry 3207 (class 1259 OID 16525)
-- Name: fki_id_espace; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_espace ON public."ReservationEspace" USING btree (id_espece);


--
-- TOC entry 3197 (class 1259 OID 16572)
-- Name: fki_id_etat_reservation; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_etat_reservation ON public."Reservation" USING btree (id_etat_reservation);


--
-- TOC entry 3200 (class 1259 OID 16549)
-- Name: fki_id_etatjeu; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_etatjeu ON public."JeuReserve" USING btree (id_etatjeu);


--
-- TOC entry 3186 (class 1259 OID 16566)
-- Name: fki_id_exposant; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_exposant ON public."Suivi_contact" USING btree (id_exposant);


--
-- TOC entry 3181 (class 1259 OID 16555)
-- Name: fki_id_festival; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_festival ON public."Espace" USING btree (id_festival);


--
-- TOC entry 3201 (class 1259 OID 16494)
-- Name: fki_id_jeu; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_jeu ON public."JeuReserve" USING btree (id_jeu);


--
-- TOC entry 3202 (class 1259 OID 16500)
-- Name: fki_id_reservation; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_reservation ON public."JeuReserve" USING btree (id_reservation);


--
-- TOC entry 3192 (class 1259 OID 16593)
-- Name: fki_id_type; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_id_type ON public."Jeux" USING btree (id_type);


--
-- TOC entry 3218 (class 2606 OID 16602)
-- Name: Jeux id_editeur; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jeux"
    ADD CONSTRAINT id_editeur FOREIGN KEY (id_editeur) REFERENCES public."Editeur"(id_editeur) NOT VALID;


--
-- TOC entry 3216 (class 2606 OID 16608)
-- Name: Exposant id_editeur; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Exposant"
    ADD CONSTRAINT id_editeur FOREIGN KEY (id_editeur) REFERENCES public."Editeur"(id_editeur) NOT VALID;


--
-- TOC entry 3228 (class 2606 OID 16520)
-- Name: ReservationEspace id_espace; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ReservationEspace"
    ADD CONSTRAINT id_espace FOREIGN KEY (id_espece) REFERENCES public."Espace"(id_espace) NOT VALID;


--
-- TOC entry 3226 (class 2606 OID 16531)
-- Name: Zone id_espace; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Zone"
    ADD CONSTRAINT id_espace FOREIGN KEY (id_espace) REFERENCES public."Espace"(id_espace) NOT VALID;


--
-- TOC entry 3222 (class 2606 OID 16583)
-- Name: Reservation id_espace; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT id_espace FOREIGN KEY (id_espace) REFERENCES public."Espace"(id_espace) NOT VALID;


--
-- TOC entry 3219 (class 2606 OID 16567)
-- Name: Reservation id_etat_reservation; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT id_etat_reservation FOREIGN KEY (id_etat_reservation) REFERENCES public."EtatReservation"(id_etat_reservation) NOT VALID;


--
-- TOC entry 3225 (class 2606 OID 16544)
-- Name: JeuReserve id_etatjeu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."JeuReserve"
    ADD CONSTRAINT id_etatjeu FOREIGN KEY (id_etatjeu) REFERENCES public."EtatJeu"(id_etatjeu) NOT VALID;


--
-- TOC entry 3215 (class 2606 OID 16561)
-- Name: Suivi_contact id_exposant; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suivi_contact"
    ADD CONSTRAINT id_exposant FOREIGN KEY (id_exposant) REFERENCES public."Exposant"(id_exposant) NOT VALID;


--
-- TOC entry 3221 (class 2606 OID 16578)
-- Name: Reservation id_exposant; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT id_exposant FOREIGN KEY (id_exposant) REFERENCES public."Exposant"(id_exposant) NOT VALID;


--
-- TOC entry 3213 (class 2606 OID 16613)
-- Name: Contact id_exposant; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact"
    ADD CONSTRAINT id_exposant FOREIGN KEY (id_exposant) REFERENCES public."Exposant"(id_exposant) NOT VALID;


--
-- TOC entry 3212 (class 2606 OID 16550)
-- Name: Espace id_festival; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Espace"
    ADD CONSTRAINT id_festival FOREIGN KEY (id_festival) REFERENCES public."Festival"(id_festival) NOT VALID;


--
-- TOC entry 3214 (class 2606 OID 16556)
-- Name: Suivi_contact id_festival; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suivi_contact"
    ADD CONSTRAINT id_festival FOREIGN KEY (id_festival) REFERENCES public."Festival"(id_festival) NOT VALID;


--
-- TOC entry 3220 (class 2606 OID 16573)
-- Name: Reservation id_festival; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Reservation"
    ADD CONSTRAINT id_festival FOREIGN KEY (id_festival) REFERENCES public."Festival"(id_festival) NOT VALID;


--
-- TOC entry 3223 (class 2606 OID 16489)
-- Name: JeuReserve id_jeu; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."JeuReserve"
    ADD CONSTRAINT id_jeu FOREIGN KEY (id_jeu) REFERENCES public."Jeux"(id_jeu) NOT VALID;


--
-- TOC entry 3224 (class 2606 OID 16495)
-- Name: JeuReserve id_reservation; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."JeuReserve"
    ADD CONSTRAINT id_reservation FOREIGN KEY (id_reservation) REFERENCES public."Reservation"(id_reservation) NOT VALID;


--
-- TOC entry 3227 (class 2606 OID 16515)
-- Name: ReservationEspace id_reservation; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."ReservationEspace"
    ADD CONSTRAINT id_reservation FOREIGN KEY (id_reservation) REFERENCES public."Reservation"(id_reservation) NOT VALID;


--
-- TOC entry 3217 (class 2606 OID 16588)
-- Name: Jeux id_type; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Jeux"
    ADD CONSTRAINT id_type FOREIGN KEY (id_type) REFERENCES public."Type"(id_type) NOT VALID;


-- Completed on 2021-03-16 16:28:22 CET

--
-- PostgreSQL database dump complete
--

