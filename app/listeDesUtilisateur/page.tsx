"use client"

import Footer from "../components/footer";
import Header from "../components/header";
import { FaDownload } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { MdDisabledByDefault } from "react-icons/md";
import ListGetter from "../components/listGetter";
import { useState,useEffect } from "react";
import MiniAside from "../components/miniAside";
import styles from "./page.module.css";
import Popup from "../components/popup";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { save, findAll, findById, deleteById } from '../API/userAPI';
import {toInstant , fromInstant} from  '../API/dateParsing';


export default function UserList(){

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


    const [popup,setPopup] = useState(false);
    const showPopup = () => {
        setPopup(true);
    }

                 
    const [doneAjout,setDoneAjout] = useState(false);
    const showPopupDoneAjout = () => {
        setDoneAjout(true);
    }

    const [doneSupp,setDoneSupp] = useState(false);
    const showPopupDoneSupp = () => {
        setDoneSupp(true);
    }

    const [failureSupp,setFailureSupp] = useState(false);
    const showPopupFailureSupp = () => {
        setFailureSupp(true);
    }

    const [deleteConfirm,setDeleteConfirm] = useState(false);
    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }



    const what = "Le compte";

    const [aside,setAside] = useState(false);
    const defaultActifElementStatus = [0,0,0,0,1] ;

    let comptes = 
    items.map((item) => 
        (
            {
                id: item.id,
                nom: item.nom,
                prenom: item.prenom,
                mat: item.matricule,
            }
        )
    );
    

      // Fonction pour télécharger les données en tant que fichier XLSX
 const handleDownload = () => {
    // Convertir les données en feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(comptes);

    // Créer un nouveau classeur
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Générer le fichier XLSX
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Créer un Blob à partir du buffer Excel
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Utiliser file-saver pour sauvegarder le fichier
    saveAs(blob, 'comptes.xlsx');
  };


    return(
        <>
            <ListGetter aside = {aside} setAside = {setAside} defaultActifElementStatus = {defaultActifElementStatus}/>
            <Header pageTitle={"liste Des Utilisateurs"} />
            <MiniAside miniAsideActivation={defaultActifElementStatus}/>
            <div style={aside? {width : "calc(100vw - 200px)",} : {}} className={`${styles.mainPersonelle} main`}>
                <div className={styles.tableControls}>
                    <input type="text" className={styles.rechercheTable} placeholder={`Rechercher...`}/>
                    <div className={styles.rightControls}>
                        <button onClick={showPopup} title="Ajouter un employant">
                            <RiUserAddFill size={20}/>
                        </button>
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
                                <th>Nom</th>
                                <th>Prenom</th>
                                <th>Matricule</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                comptes.map((ele,ind) => (
                                    <tr key={ind}>
                                        <td className={styles.lineID}>{ele.id}</td>
                                        <td>{ele.nom}</td>
                                        <td>{ele.prenom}</td>
                                        <td>{ele.mat}</td>
                                        <td className={styles.action}>
                                            <div className={styles.actions}>
                                                <MdDisabledByDefault className={styles.btn} color={"red"} size={24} title={"Desactiver le compte"} onClick={showDeleteConfirm}/>
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
            {deleteConfirm && <Popup popup={deleteConfirm} setPopup={setDeleteConfirm} popup2={doneSupp} setPopup2={setDoneSupp} content={0} what={what}/>}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={106} what={what}/>}
            {failureSupp && <Popup popup={failureSupp} setPopup={setFailureSupp} content={116} what={what}/>}
            {popup && <Popup popup={popup} setPopup={setPopup} popup2={doneAjout} setPopup2={setDoneAjout} content={41} what={what}/>}
        </>
    )
}