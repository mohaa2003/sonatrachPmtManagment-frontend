"use client"

import Footer from "../components/footer";
import Header from "../components/header";
import { FaDownload } from "react-icons/fa";
import { RiUserAddFill } from "react-icons/ri";
import { RiSettings5Fill } from "react-icons/ri";
import { IoMdArchive } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import ListGetter from "../components/listGetter";
import { useState } from "react";
import { useEffect } from "react";
import MiniAside from "../components/miniAside";
import styles from "./page.module.css";
import Popup from "../components/popup";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { save, findAllActives, findById, deleteById } from '../API/employeAPI';
import {toInstant , fromInstant} from  '../API/dateParsing';

/*

import React, { useEffect, useState } from 'react';
import { save, findAllActives, findById, delete } from '../API/employeAPI';

const ItemsList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les items depuis l'API
    const fetchItems = () => {
        getAllItems()
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

    const handleCreate = (newItem) => {
        createItem(newItem)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };

    const handleUpdate = (id, updatedItem) => {
        updateItem(id, updatedItem)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };

    const handleDelete = (id) => {
        deleteItem(id)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };

    return (
        <div>
            <h1>Items List</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => handleUpdate(item.id, { name: 'Updated Name' })}>Update</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleCreate({ name: 'New Item' })}>Create New Item</button>
        </div>
    );
};

export default ItemsList;
*/



export default function PersonalList(){

    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    // Fonction pour récupérer les items depuis l'API
    const fetchItems = () => {
        findAllActives()
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


    const [popup,setPopup] = useState(false);
    const showPopup = () => {
        setPopup(true);
    }

    const [popupArch,setPopupArch] = useState(false);
    const showPopupArch = () => {
        setPopupArch(true);
    }

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



    const what = "L'employe";

    const [aside,setAside] = useState(false);
    const defaultActifElementStatus = [0,1,0,0,0] ;


    let persons = items.map((item) => 
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
                function: item.fonctionalityDto.intitule
         }
    )
    );

    console.log(persons);

 // Fonction pour télécharger les données en tant que fichier XLSX
 const handleDownload = () => {
    // Convertir les données en feuille de calcul
    const worksheet = XLSX.utils.json_to_sheet(persons);

    // Créer un nouveau classeur
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Générer le fichier XLSX
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Créer un Blob à partir du buffer Excel
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // Utiliser file-saver pour sauvegarder le fichier
    saveAs(blob, 'persons.xlsx');
  };


    return(
        <>
            <ListGetter aside = {aside} setAside = {setAside} defaultActifElementStatus = {defaultActifElementStatus}/>
            <Header pageTitle={"liste Des Personnels"} />
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
                                <th>intitulé poste</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                persons.map((ele,ind) => (
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
                                        <td className={styles.action}>
                                            <div className={styles.actions}>
                                                <TiDelete className={styles.btn} color={"red"} size={30} title={"supprimer le personnel"} onClick={showDeleteConfirm}/>
                                                <RiSettings5Fill className={styles.btn} color={"var(--bright)"} size={27} title={"modifier le personnel"} onClick={showPopupModifiy}/>
                                                <IoMdArchive className={styles.btn} color={"var(--bright)"} size={24} title={"Archiver le personnel"} onClick={showPopupArch}/>

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
            {popupArch && <Popup popup={popupArch} setPopup={setPopupArch} popup2={doneArch} setPopup2={setDoneArch} content={52} what={what}/>}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={103} what={what}/>}
            {doneArch && <Popup popup={doneArch} setPopup={setDoneArch} content={104} what={what}/>}
            {failureSupp && <Popup popup={failureSupp} setPopup={setFailureSupp} content={113} what={what}/>}
            {popup && <Popup popup={popup} setPopup={setPopup} popup2={doneAjout} setPopup2={setDoneAjout} content={21} what={what}/>}
            {modify && <Popup popup={modify} setPopup={setModifiy} popup2={doneModif} setPopup2={setDoneModif} content={22} what={what}/>}
        </>
    )
}
