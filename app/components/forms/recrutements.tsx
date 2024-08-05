import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Popup from "../popup";
import styles from "./recrutement.module.css";

const AJOUT = 1;
const MODIF = 2;
const thisYear = 2024;
             
export default function RecrutementForm({ajoutOuModification,popup,setPopup,popup2,setPopup2}){


    const showPopupDoneAjout = ()=>{
            setPopup(false);
            setPopup2(true);
        }
    
        const showPopupDoneModif = ()=>{
            setPopup(false);
            setPopup2(true);
        }
    
    let disabledInput ;
    if(ajoutOuModification === AJOUT){
        disabledInput = false;
    }
    else{
        disabledInput = true;
    }

    const what = "La prevision";

const modeRecrt = [
    { title: 'Exterieur', value: 'ext' },
    { title: 'Interieur', value: 'int' }, 
];

const structures = [
    { title: 'DR TFT/EP', value: 'drTftEp' },
    { title: 'DGPS', value: 'dgps' },
    { title: 'Direction Générale', value: 'directionGenerale' },
    { title: 'Service Commercial', value: 'serviceCommercial' },
 ];
 const diplomas = [
    { title: 'Master en Informatique', value: 'masterInfo' },
    { title: 'Licence en Informatique', value: 'licenceInfo' },
    { title: 'Doctorat en Informatique', value: 'doctoratInfo' },
    { title: 'Master en Génie Logiciel', value: 'masterGenieLog' },
    { title: 'Licence en Génie Logiciel', value: 'licenceGenieLog' },
    { title: 'Doctorat en Génie Logiciel', value: 'doctoratGenieLog' },
    { title: 'Master en Data Science', value: 'masterDataScience' },
    { title: 'Licence en Data Science', value: 'licenceDataScience' },
    { title: 'Doctorat en Data Science', value: 'doctoratDataScience' },
    { title: 'Master en Cybersécurité', value: 'masterCyber' }
  ];
  


return(
    <>
        <h3 className={styles.titleForm}>{disabledInput? "Modifier La prevision du recrutement" : "Ajouter une prevision du recrutement"}</h3>
        <div className={styles.inputs}>
            <Input value={diplomas[0]} label={"Diplome"} width={"100%"} selectElement={diplomas}/>
            <Input value={0} placeholder={disabledInput?"":"Experience"} type={"number"} label={"Experience"} width={"45%"}/>
            <Input value={thisYear} placeholder={disabledInput?"":"Annee"} type={"number"} label={"Annee"} width={"45%"}/>
            <Input value={modeRecrt[0].title} label={"Mode Recrutement"} width={"45%"} selectElement={modeRecrt}/>
            <Input value={structures[0].title} label={"Structure Du depart"} width={"45%"} selectElement={structures}/>
            <Input value={disabledInput?"metrise les langues francias et anglais":""} placeholder={disabledInput?"":"Specifications"} label={"Specifications"} width={"100%"}/>
        </div>

        <div className={styles.buttons} onClick={disabledInput? showPopupDoneModif:showPopupDoneAjout}>
                <Button content = {disabledInput? "Effectuer" : "Ajouter"}/>
        </div>
        {/* {failureAjout && <Popup popup={failureAjout} setPopup={setFailureAjout} content={111} what={what}/>}
        {failureModif && <Popup popup={failureModif} setPopup={setFailureModif} content={112} what={what}/>} */}
    </>

);
}