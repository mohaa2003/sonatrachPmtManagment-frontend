import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Popup from "../popup";
import styles from "./pmt.module.css";

const AJOUT = 1;
const MODIF = 2;

             
export default function PmtForm({ajoutOuModification,popup,setPopup,popup2,setPopup2}){

    
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

    const dureePMT = [
        {title: 3 ,value:"duree3"},
        {title: 4 ,value:"duree4"},
        {title: 5 ,value:"duree5"},
        {title: 6 ,value:"duree6"},
    ];


    const thisYear = 2024;
    const what = "PMT";
    return(
        <>
            <h3 className={styles.titleForm}>{disabledInput? "Modifier Le PMT" : "Ajouter Un PMT Pour "+thisYear}</h3>
            <div className={styles.inputs}>
                <Input value={"2024"} label={"Annee"} width={"45%"} disabled={true}/>
                <Input value={dureePMT[1].title} label={"Duree"} width={"45%"} selectElement={dureePMT}/>
            </div>

            <div className={styles.buttons} onClick={showPopupDoneAjout}>
                    <Button content = {disabledInput? "Effectuer" : "Ajouter"}/>
            </div>
            {failureAjout && <Popup popup={failureAjout} setPopup={setFailureAjout} content={111} what={what}/>}
            {failureModif && <Popup popup={failureModif} setPopup={setFailureModif} content={112} what={what}/>}
        </>

    );
}