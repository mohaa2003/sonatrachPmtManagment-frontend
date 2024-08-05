"use client"

import Footer from "../components/footer";
import Header from "../components/header";
import { FaDownload } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { RiSettings5Fill } from "react-icons/ri";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { TiDelete } from "react-icons/ti";
import ListGetter from "../components/listGetter";
import { useState,useEffect } from "react";
import MiniAside from "../components/miniAside";
import styles from "./page.module.css";
import Popup from "../components/popup";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { save, findAll, findById, deleteById } from '../API/inactiveEmployeAPI';
import {toInstant , fromInstant} from  '../API/dateParsing';



export default function ArchivedPersonalList(){

    const [modify,setModifiy] = useState(false);
    const showPopupModifiy = () => {
        setModifiy(true);
    }

                 
    const [doneAjout,setDoneAjout] = useState(false);
    const showPopupDoneAjout = () => {
        setDoneAjout(true);
    }
        
    const [doneModif,setDoneModif] = useState(false);
    const showPopupDoneModif = () => {
        setDoneModif(true);
    }

    const [doneSupp,setDoneSupp] = useState(false);
    const showPopupDoneSupp = () => {
        setDoneSupp(true);
    }

    const [doneArch,setDoneArch] = useState(false);
    const showPopupDoneArch = () => {
        setDoneArch(true);
    }

    const [failureSupp,setFailureSupp] = useState(false);
    const showPopupFailureSupp = () => {
        setFailureSupp(true);
    }

    const [deleteConfirm,setDeleteConfirm] = useState(false);
    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }

    const [archivConfirm,setArchivConfirm] = useState(false);
    const showArchivConfirm = () => {
        setArchivConfirm(true);
    }


    const handleCreate = (newItem) => {
        save(newItem)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };
const handleDelete = (id) => {
        deleteById(id)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };


    const what = "L'employe";

    const [aside,setAside] = useState(false);
    const defaultActifElementStatus = [0,0,1,0,0] ;

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les items depuis l'API
    const fetchItems = () => {
        findAll()
            .then(data => {
                setItems(data);
                setError(null); // Réinitialiser les erreurs
            })
            .catch(error => setError(error.message));
    };

    // Utilisation de useEffect pour charger les items au montage du composant
    useEffect(() => {
        fetchItems();
    }, []);

    const handleCreateArch = (newItem) => {
        save(newItem)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };
const handleDeleteArch = (id) => {
        deleteById(id)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };

    console.log(items);


    let archive = 
    items.map((item) => 
        (
            {
                id: item.id,
                codeFunction: item.fonctionalityDto?.activityDto?.code,
                structure: item.structureDto?.designation,
                nom: item.nom,
                prenom: item.prenom,
                sexe: item.sexe,
                dateNaiss: fromInstant(item.dateNaissance),
                dateRect: fromInstant(item.dateRect),
                diplome: item.diplomatDto?.titre,
                valDip: item.diplomatDto?.type,
                mat: item.matricule,
                lieu: item.structureDto?.lieu,
                echelle: item.echelle,
                function: item.fonctionalityDto.intitule,
                archivageDate: fromInstant(item.departYear),
                motif: item.motif ,
                observation: item.structureDest?.designation
         }
    )
    );
    
    



     // Fonction pour télécharger les données en tant que fichier XLSX
 const handleDownload = () => {
    // Convertir les données en feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(archive);

    // Créer un nouveau classeur
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Générer le fichier XLSX
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Créer un Blob à partir du buffer Excel
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Utiliser file-saver pour sauvegarder le fichier
    saveAs(blob, 'archives.xlsx');
  };


    return(
        <>
            <ListGetter aside = {aside} setAside = {setAside} defaultActifElementStatus = {defaultActifElementStatus}/>
            <Header pageTitle={"liste Des Personnels Archive"} />
            <MiniAside miniAsideActivation={defaultActifElementStatus}/>
            <div style={aside? {width : "calc(100vw - 200px)",} : {}} className={`${styles.mainPersonelle} main`}>
                <div className={styles.tableControls}>
                    <input type="text" className={styles.rechercheTable} placeholder={`Rechercher...`}/>
                    <div className={styles.rightControls}>
                        <button onClick={handleDownload} title="Telecharger le fichier (.xsl)">
                            <FaDownload size={20}/>
                        </button>
                    </div>
                </div>
                <div className={styles.tablePersonelle}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Code Fonction</th>
                                <th>designation structure</th>
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Sexe</th>
                                <th>Date de naissance</th>
                                <th>Date de recrutement</th>
                                <th>Diplome</th>
                                <th>Valeur diplome</th>
                                <th>Matricule</th>
                                <th>Lieu du travail</th>
                                <th>Echelle</th>
                                <th>Intitulé poste</th>
                                <th>Date de depart</th>
                                <th>Motif</th>
                                <th>Observation</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                archive.map((ele,ind) => (
                                    <tr key={ind}>
                                        <td className={styles.lineID}>{ele.id}</td>
                                        <td>{ele.codeFunction}</td>
                                        <td>{ele.structure}</td>
                                        <td>{ele.nom}</td>
                                        <td>{ele.prenom}</td>
                                        <td>{ele.sexe}</td>
                                        <td>{ele.dateNaiss}</td>
                                        <td>{ele.dateRect}</td>
                                        <td>{ele.diplome}</td>
                                        <td>{ele.valDip}</td>
                                        <td>{ele.mat}</td>
                                        <td>{ele.lieu}</td>
                                        <td>{ele.echelle}</td>
                                        <td>{ele.function}</td>
                                        <td>{ele.archivageDate}</td>
                                        <td>{ele.motif}</td>
                                        <td>{(ele.observation !== "")? ele.observation :"-"}</td>
                                        <td className={styles.action}>
                                            <div className={styles.actions}>
                                                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le personnel"} onClick={showDeleteConfirm}/>
                                                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le personnel"} onClick={showPopupModifiy}/>
                                                <HiMiniArchiveBoxXMark className={styles.btn} color={"var(--bright)"} size={24} title={"desarchiver le personnel"} onClick={showArchivConfirm}/>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
            {doneAjout && <Popup popup={doneAjout} setPopup={setDoneAjout} content={101} what={what}/>}
            {doneModif && <Popup popup={doneModif} setPopup={setDoneModif} content={102} what={what}/>}
            {deleteConfirm && <Popup popup={deleteConfirm} setPopup={setDeleteConfirm} popup2={doneSupp} setPopup2={setDoneSupp} content={0} what={what}/>}
            {archivConfirm && <Popup popup={archivConfirm} setPopup={setArchivConfirm} popup2={doneArch} setPopup2={setDoneArch} content={202} what={what}/>}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={103} what={what}/>}
            {doneArch && <Popup popup={doneArch} setPopup={setDoneArch} content={105} what={what}/>}
            {failureSupp && <Popup popup={failureSupp} setPopup={setFailureSupp} content={113} what={what}/>}
            {modify && <Popup popup={modify} setPopup={setModifiy} popup2={doneModif} setPopup2={setDoneModif} content={51} what={what}/>}
        </>
    )
}