"use client"
import { useState } from "react";
import { RiSettings5Fill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Footer from "../components/footer";
import Header from "../components/header";
import ListGetter from "../components/listGetter";
import MiniAside from "../components/miniAside";
import NavBar from "../components/navBar";
import styles from "./page.module.css";
import Prevision from "../components/pmtSections/prevision";
import AccueilPMT from "../components/pmtSections/accueilPMT";
import Popup from "../components/popup";
import StatPrevision from "../components/pmtSections/statPrevision";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

export default function PMT() {
    const what = "PMT";
    const what2 = "La prevision";

    const [modifyRect, setModifiyRect] = useState(false);
    const showPopupModifiyRect = () => {
        setModifiyRect(true);
    }

    const [modifyDepart, setModifiyDepart] = useState(false);
    const showPopupModifiyDepart = () => {
        setModifiyDepart(true);
    }


    const [pmtSelected, setPmtSelected] = useState(false);
    const [confirmSupp, setConfirmSupp] = useState(false);
    const showConfirmSuppPopup = () => {
        setConfirmSupp(true);
    }
    const [doneModif, setDoneModif] = useState(false);
    const showDoneModifPopup = () => {
        setDoneModif(true);
    }
    const [doneSupp, setDoneSupp] = useState(false);
    const [doneValid, setDoneValid] = useState(false);
    const showDoneValidPopup = () => {
        setPrevisionValid(true);
        setDoneValid(true);
    }
    const [doneInvalid, setDoneInvalid] = useState(false);
    const showDoneInvalid = (i) => {
        setDoneInvalid(true);
        setPrevisionValid(false);
    }
    const [previsionValid, setPrevisionValid] = useState(false);

    const elements = [
        [
            "NUMERO",
            "STRUCTURE",
            "MATRICULE",
            "NOM",
            "PRENOM",
            "DATE DE NAISSANCE",
            "DATE RECRUTEMENT",
            "SEXE",
            "FONCTION",
            "CODE FONCTION",
            "ACTIVITE",
            "Fonction (FCM/FST/FSP)",
            "ECHELLE",
            "Catégorie",
            "CSP",
            "VALEUR DIPLÔME",
            "NATURE DE DEPART",
            "STRUCTURE DAFFECTATION",
            "DATE D'EFFET",
            "OBSERVATION",
            "ACTION"
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ],
        [
            "DC DSI",
            "04283D",
            "BOULEKBACHI",
            "HANAN",
            "31/10/1984",
            "24/08/2008",
            "F",
            "CHARGE GESTION",
            17010118,
            17,
            "FST",
            19,
            "Maitrse",
            "AM",
            185,
            "DETACHEMENT",
            "PROJET GOST",
            "28/6/2021",
            "",
            <div className={styles.actions}>
                <IoCheckmarkDoneCircle className={styles.btn} color={"red"} size={25} title={"Valider le depart"} />
                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
            </div>
        ]
    ];
    const departs = [
        {
            id: 'N',
            matricule: 'Matricule',
            nom: 'Nom',
            prenom: 'Prénom',
            codeActivite: 'Code Activité',
            intitulePoste: 'Intitulé de Poste',
            csp: 'CSP',
            fonction: 'Fonction (FCM/FST/FSP)',
            lieuTravail: 'Lieu de travail (Wilaya)',
            motifDepart: 'Motif de départs',
            anneeDepart: 'Année de Départ',
            structureDepart: 'Structure de depart',
        },
        {
            matricule: '123456A',
            nom: 'Benkirane',
            prenom: 'Yacine',
            codeActivite: 15,
            intitulePoste: 'chef de projet',
            csp: 'ING',
            fonction: 'FCM',
            lieuTravail: 'Alger',
            motifDepart: 'demission',
            anneeDepart: 2023,
            structureDepart: '',
        },
        {
            matricule: '654321B',
            nom: 'Mezouar',
            prenom: 'Salima',
            codeActivite: 16,
            intitulePoste: 'analyste',
            csp: 'TS',
            fonction: 'FST',
            lieuTravail: 'Oran',
            motifDepart: 'retraite',
            anneeDepart: 2022,
            structureDepart: '',
        },
        {
            matricule: '789012C',
            nom: 'Brahimi',
            prenom: 'Amine',
            codeActivite: 17,
            intitulePoste: 'technicien supérieur',
            csp: 'TECHNICIEN',
            fonction: 'FSP',
            lieuTravail: 'Constantine',
            motifDepart: 'mutation',
            anneeDepart: 2021,
            structureDepart: 'service technique',
        },
        {
            matricule: '890123D',
            nom: 'Djebar',
            prenom: 'Fatima',
            codeActivite: 18,
            intitulePoste: 'assistante administrative',
            csp: 'ADM',
            fonction: 'FCM',
            lieuTravail: 'Annaba',
            motifDepart: 'demission',
            anneeDepart: 2020,
            structureDepart: '',
        },
        {
            matricule: '234567E',
            nom: 'Bouzid',
            prenom: 'Karim',
            codeActivite: 19,
            intitulePoste: 'comptable',
            csp: 'AC',
            fonction: 'FST',
            lieuTravail: 'Blida',
            motifDepart: 'retraite',
            anneeDepart: 2019,
            structureDepart: '',
        },
        {
            matricule: '345678F',
            nom: 'Cherif',
            prenom: 'Nassim',
            codeActivite: 20,
            intitulePoste: 'ingénieur réseaux',
            csp: 'ING',
            fonction: 'FSP',
            lieuTravail: 'Sétif',
            motifDepart: 'mutation',
            anneeDepart: 2023,
            structureDepart: 'département informatique',
        },
        {
            matricule: '456789G',
            nom: 'Mokhtari',
            prenom: 'Samira',
            codeActivite: 21,
            intitulePoste: 'responsable RH',
            csp: 'CU',
            fonction: 'FCM',
            lieuTravail: 'Tizi Ouzou',
            motifDepart: 'demission',
            anneeDepart: 2021,
            structureDepart: '',
        },
        {
            matricule: '567890H',
            nom: 'Saadi',
            prenom: 'Rachid',
            codeActivite: 22,
            intitulePoste: 'technicien de maintenance',
            csp: 'TECHNIQUE',
            fonction: 'FST',
            lieuTravail: 'Bejaia',
            motifDepart: 'retraite',
            anneeDepart: 2020,
            structureDepart: '',
        },
        {
            matricule: '678901I',
            nom: 'Zeroual',
            prenom: 'Lamia',
            codeActivite: 23,
            intitulePoste: 'aide comptable',
            csp: 'AIDE',
            fonction: 'FSP',
            lieuTravail: 'Batna',
            motifDepart: 'mutation',
            anneeDepart: 2018,
            structureDepart: 'service comptabilité',
        },
        {
            matricule: '789012J',
            nom: 'Haddad',
            prenom: 'Mohamed',
            codeActivite: 24,
            intitulePoste: 'chargé de communication',
            csp: 'AUTRE',
            fonction: 'FCM',
            lieuTravail: 'Mostaganem',
            motifDepart: 'demission',
            anneeDepart: 2023,
            structureDepart: '',
        },
    ];
    const recrutements = [
        {
            num: "N",
            niveauRequis: 'Niveau requis',
            diplome: 'Diplôme',
            specialite: 'Spécialité',
            experience: 'Expérience',
            specificitesPoste: 'Spécificités du poste cible',
            modeRecrutement: 'Mode de recrutement',
            lieuTravail: 'Lieu Travail (Wilayas d\'algerie)',
            annee: 'ANNEE',
            action: "Action",
        },
        {
            niveauRequis: 'Bac+5',
            diplome: 'Master',
            specialite: 'Informatique',
            experience: '5 ans',
            specificitesPoste: 'Bonne maîtrise des langages de programmation',
            modeRecrutement: 'EXT',
            lieuTravail: 'Alger',
            annee: '2024',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,

        },
        {
            niveauRequis: 'Bac+3',
            diplome: 'Licence',
            specialite: 'Gestion',
            experience: '3 ans',
            specificitesPoste: 'Compétences en comptabilité',
            modeRecrutement: 'EXT',
            lieuTravail: 'Oran',
            annee: '2023',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+2',
            diplome: 'DUT',
            specialite: 'Réseaux et télécommunications',
            experience: '2 ans',
            specificitesPoste: 'Certifications Cisco souhaitées',
            modeRecrutement: 'EXT',
            lieuTravail: 'Constantine',
            annee: '2022',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+4',
            diplome: 'Ingénieur',
            specialite: 'Électronique',
            experience: '4 ans',
            specificitesPoste: 'Connaissance en systèmes embarqués',
            modeRecrutement: 'EXT',
            lieuTravail: 'Annaba',
            annee: '2021',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+5',
            diplome: 'Master',
            specialite: 'Finance',
            experience: '5 ans',
            specificitesPoste: 'Analyse financière avancée',
            modeRecrutement: 'EXT',
            lieuTravail: 'Blida',
            annee: '2020',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+2',
            diplome: 'DUT',
            specialite: 'Marketing',
            experience: '2 ans',
            specificitesPoste: 'Compétences en publicité digitale',
            modeRecrutement: 'EXT',
            lieuTravail: 'Béjaïa',
            annee: '2019',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+3',
            diplome: 'Licence',
            specialite: 'Informatique de gestion',
            experience: '3 ans',
            specificitesPoste: 'Connaissance des ERP',
            modeRecrutement: 'EXT',
            lieuTravail: 'Sétif',
            annee: '2018',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+5',
            diplome: 'Master',
            specialite: 'Droit',
            experience: '5 ans',
            specificitesPoste: 'Maîtrise des procédures juridiques',
            modeRecrutement: 'EXT',
            lieuTravail: 'Tlemcen',
            annee: '2017',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        },
        {
            niveauRequis: 'Bac+4',
            diplome: 'Ingénieur',
            specialite: 'Mécanique',
            experience: '4 ans',
            specificitesPoste: 'Compétence en CAO/DAO',
            modeRecrutement: 'EXT',
            lieuTravail: 'Batna',
            annee: '2016',
            action: <div className={styles.actions}>
                <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
            </div>,
        }
    ];

// Fonction pour télécharger les données en tant que fichier XLSX
const handleDownload1 = () => {
    // Convertir les données en feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(departs);

    // Créer un nouveau classeur
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Générer le fichier XLSX
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Créer un Blob à partir du buffer Excel
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Utiliser file-saver pour sauvegarder le fichier
    saveAs(blob, 'departs.xlsx');
  };

  // Fonction pour télécharger les données en tant que fichier XLSX
 const handleDownload2 = () => {
    // Convertir les données en feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(recrutements);

    // Créer un nouveau classeur
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Générer le fichier XLSX
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Créer un Blob à partir du buffer Excel
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Utiliser file-saver pour sauvegarder le fichier
    saveAs(blob, 'recrutements.xlsx');
  };


    const [pmtThisYearSelected, setPmtThisYearSelected] = useState(false);
    const [popup, setPopup] = useState(false);
    const showPopup = () => {
        setPopup(true);
    }

    const [aside, setAside] = useState(false);
    const [active, setActive] = useState([1, 0, 0, 0, 0, 0]);
    const defaultActifElementStatus = [0, 0, 0, 1, 0];
    return (
        <>
            <ListGetter aside={aside} setAside={setAside} defaultActifElementStatus={defaultActifElementStatus} />
            <Header pageTitle={"PMT"} />
            <MiniAside miniAsideActivation={defaultActifElementStatus} />
            <div style={aside ? { width: "calc(100vw - 200px)" } : {}} className={`main ${styles.mainPMT}`}>
                <NavBar active={active} setActive={setActive} popup={popup} setPopup={setPopup} pmtSelected={pmtSelected} setPmtSelected={setPmtSelected} />
                {active[0] == 1 && <AccueilPMT pmtThisYearSelected={pmtThisYearSelected} setPmtThisYearSelected={setPmtThisYearSelected} pmtSelected={pmtSelected} setPmtSelected={setPmtSelected} />}
                {active[1] == 1 && pmtSelected ? <Prevision onDownald={handleDownload1} pmtThisYearSelected={pmtThisYearSelected} elementList={Object.values(departs.map((ele,ind) => pmtThisYearSelected ? (Object.values({
                    ...ele, action: ind===0? "Action" : <div className={styles.actions}>
                        <IoCheckmarkDoneCircle onClick={previsionValid ? showDoneInvalid : showDoneValidPopup} className={styles.btn} color={previsionValid ? "var(--bright)" : "red"} size={25} title={"Valider le depart"} />
                        <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer le depart"} />
                        <RiSettings5Fill onClick={showPopupModifiyDepart} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le depart"} />
                    </div>
                })) : (Object.values(ele))))} title={"Prevision Des Departs"} tools={true} pmtSelected={pmtSelected} setPmtSelected={setPmtSelected} /> : popup && <Popup what={what} popup={popup} setPopup={setPopup} content={33} />}
                {active[2] == 1 && pmtSelected ? <Prevision onDownald={handleDownload2} pmtThisYearSelected={pmtThisYearSelected} elementList={Object.values(recrutements.map((ele,ind) => pmtThisYearSelected ? (Object.values({
                    ...ele, action: ind===0? "Action" : <div className={styles.actions}>
                    <TiDelete onClick={showConfirmSuppPopup} className={styles.btn} color={"red"} size={30} title={"supprimer la prevision du recrutement"} />
                    <RiSettings5Fill onClick={showPopupModifiyRect} className={styles.btn} color={"var(--bright)"} size={27} title={"modifier la prevision du recrutement"} />
                    </div>
                })) : (Object.values(ele))))} title={"Prevision Des Recrutements"} tools={true} pmtSelected={pmtSelected} setPmtSelected={setPmtSelected} /> : popup && <Popup what={what} popup={popup} setPopup={setPopup} content={33} />}
                {active[3] == 1 && <StatPrevision title={"Mouvement Des Effectifs Par CSP"} />}
                {active[4] == 1 && <Prevision pmtThisYearSelected={pmtThisYearSelected} elementList={elements} title={"Mouvement Des Effectifs Par Activite"} pmtSelected={pmtSelected} setPmtSelected={setPmtSelected} />}
                {active[5] == 1 && <Prevision pmtThisYearSelected={pmtThisYearSelected} elementList={elements} title={"Evaluation Des Effectifs Par CSP"} pmtSelected={pmtSelected} setPmtSelected={setPmtSelected} />}
            </div>
            <Footer />
            {doneModif && <Popup popup={doneModif} setPopup={setDoneModif} content={102} what={what2} />}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={103} what={what2} />}
            {confirmSupp && <Popup popup={confirmSupp} setPopup={setConfirmSupp} popup2={doneSupp} setPopup2={setDoneSupp} content={0} what={what2} />}
            {doneValid && <Popup popup={doneValid} setPopup={setDoneValid} content={107} what={what2} />}
            {doneInvalid && <Popup popup={doneInvalid} setPopup={setDoneInvalid} content={108} what={what2} />}
            {modifyDepart && <Popup popup={modifyDepart} setPopup={setModifiyDepart} popup2={doneModif} setPopup2={setDoneModif} content={62} what={what2} />}
            {modifyRect && <Popup popup={modifyRect} setPopup={setModifiyRect} popup2={doneModif} setPopup2={setDoneModif} content={72} what={what2} />}
        </>
    )
}