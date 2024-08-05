import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Popup from "../popup";
import styles from "./pmt.module.css";

const AJOUT = 1;
const MODIF = 2;
const sexe = [
                {title :"Homme",value: "homme"},
                {title :"Femme",value: "femme"}
             ];
const fonction = [
                {title :"CHARGE DE GESTION ADM N2",value: "1"},
                {title :"ING ETUDES ET DEV",value: "2"},
                {title :"CHEF DEPARTEMENT P/",value: "3"},
                {title :"ING AMD N1",value: "4"}
             ];
const activite = [
                {title :"17",value: "kk"},
                {title :"21",value: "mm"}
             ];
const csp = [
                {title :"TS",value: "ts"},
                {title :"ING",value: "ing"},
                {title :"AM",value: "am"},
             ];
             
export default function EmployeForm({ajoutOuModification,popup,setPopup,popup2,setPopup2}){

    
    const [failureAjout,setFailureAjout] = useState(false);
    const showPopupFailureAjout = () => {
        setFailureAjout(true);
    }
    
    
    const showPopupDoneAjout = ()=>{
            setPopup(false);
            setPopup2(true);
        }

    
        const [failureModif,setFailureModif] = useState(false);
        const showPopupFailureModif = () => {
            setFailureModif(true);
        }

    let disabledInput ;
    if(ajoutOuModification === AJOUT){
        disabledInput = false;
    }
    else{
        disabledInput = true;
    }


    const what = "L'employe";
    return(
        <>
            <h3 className={styles.titleForm}>{disabledInput? "Modifier Les Information De L'employe" : "Ajouter Un Nouveau Employe"}</h3>
            <div className={styles.inputs}>
                <Input value={disabledInput? "127FF021":""} placeholder={"Matricule"} label={"Matricule"} width={"45%"}/>
                <Input value={disabledInput? "Hamoud":""} placeholder={"Nom"} label={"Nom"} width={"45%"}/>
                <Input value={disabledInput? "2020-07-12":""} type={"date"} placeholder={"Date De Naissance"} label={"Date De Naissance"} width={"45%"}/>
                <Input value={disabledInput? "Boulam":""} placeholder={"Prenom"} label={"Prenom"} width={"45%"}/>
                <Input value={disabledInput? "2020-07-12":""} type={"date"} placeholder={"Date De Recrutement"} label={"Date De Recrutement"} width={"45%"}/>
                <Input value={sexe[0]} label={"Sexe"} width={"100%"} selectElement={sexe}/>
                <Input value={fonction[0]} label={"Fonction"} width={"100%"} selectElement={fonction}/>
                <Input value={activite[0]} label={"Activite"} width={"100%"} selectElement={activite}/>
                <Input value={disabledInput? "11":""} type={"number"} placeholder={"Echelle"} label={"Echelle"} width={"100%"}/>
                <Input value={csp[0]} label={"CSP"} width={"100%"} selectElement={csp}/>
                <Input value={csp[0]} label={"Diplome"} width={"100%"} selectElement={csp}/>
            </div>

            <div className={styles.buttons} onClick={showPopupDoneAjout}>
                    <Button content = {disabledInput? "Effectuer" : "Ajouter"}/>
            </div>
            {failureAjout && <Popup popup={failureAjout} setPopup={setFailureAjout} content={111} what={what}/>}
            {failureModif && <Popup popup={failureModif} setPopup={setFailureModif} content={112} what={what}/>}
        </>

    );
}