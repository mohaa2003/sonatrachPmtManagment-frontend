import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Popup from "../popup";
import styles from "./pmt.module.css";

const AJOUT = 1;
const MODIF = 2;

const motif = [
                {title :"Decis",value: "decis"},
                {title :"Retraite",value: "retraite"},
                {title :"Demission",value: "demission"},
                {title :"Mutation",value: "mutation"},
             ];
             
export default function ArchivedForm({ajoutOuModification,popup,setPopup,popup2,setPopup2}){

    let disabledInput ;
    if(ajoutOuModification === AJOUT){
        disabledInput = false;
    }
    else if(ajoutOuModification === MODIF){
        disabledInput = true;
    }


    const [failureAjout,setFailureAjout] = useState(false);
    const showPopupFailureAjout = () => {
        setFailureAjout(true);
    }

    const [failureModif,setFailureModif] = useState(false);
    const showPopupFailureModif = () => {
        setFailureModif(true);
    }
    
    
    const showPopupDoneAjout = ()=>{
            setPopup(false);
            setPopup2(true);
        }



    const what = "L'employe";
    return(
        <>
            <h3 className={styles.titleForm}>{disabledInput? "Modifier Les Information De L'employe": "Archiver Le Personnel"}</h3>
            <div className={styles.inputs}>
                <Input value={disabledInput? "2020-12-05":""} placeholder={disabledInput? "":"Date de depart"} type={"date"} label={"Date de depart"} width={"45%"}/>
                <Input value={motif[0]} label={"Motif"} width={"45%"} selectElement={motif}/>
                <Input placeholder={disabledInput? "" :"Description"} label={"Description"} width={"45%"}/>
            </div>

            <div className={styles.buttons} onClick={showPopupDoneAjout}>
                    <Button content = {"Effectuer"}/>
            </div>
            {failureAjout && <Popup popup={failureAjout} setPopup={setFailureAjout} content={111} what={what}/>}
            {failureModif && <Popup popup={failureModif} setPopup={setFailureModif} content={112} what={what}/>}
        </>

    );
}