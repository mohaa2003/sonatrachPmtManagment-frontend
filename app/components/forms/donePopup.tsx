import styles from "./donePopup.module.css";
import { MdOutlineErrorOutline } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import Button from "../button";



const AJOUT = 1;
const MODIF = 2;
const SUPP = 3;
const ARCHIVE = 4;
const DESARCHIVE = 5;
const DESACIVE = 6;
const SELECTIONNE = 7;
const EXIST = 8;
const VALIDE = 9;
const DONE = 1;
const FAILURE = 2;
const ALREADY = 3;

export default function DonePopup({what,action,status,popup,setPopup}){
    let text1 ;
    if(status == AJOUT){
        text1 = " ajoute ";
    }
    else if(status == MODIF){
        text1 = " modifie ";
    }
    else if(status == SUPP){
        text1 = " supprime ";
    }
    else if(status == ARCHIVE){
        text1 = " archive ";
    }
    else if(status == DESARCHIVE){
        text1 = " desarchive ";
    }
    else if(status == DESACIVE){
        text1 = " desactive ";
    }
    else if(status == SELECTIONNE){
        text1 = " selectionne ";
    }
    else if(status == EXIST){
        text1 = " existe ";
    }
    else if(status == VALIDE){
        text1 = " validee ";
    }

    let text2;
    let icone;
    if(action == DONE){
        text2 = " est ";
        icone = <MdFileDownloadDone size={30} color="var(--bright)"/>
    }
    else if(action == FAILURE){
        text2 = " n'est pas ";
        icone = <MdOutlineErrorOutline size={30} color="red"/>
    }
    else if(action == ALREADY){
        text2 = " est deja ";
        icone = <MdOutlineErrorOutline size={30} color="red"/>
    }

    const hideDonePopup = ()=>{
        setPopup(false);
    }

    return(
        <>
            <div className={styles.titleDone}>
                {icone}
                <h3>{what+text2+text1}</h3>
            </div>
            <div className={styles.buttons} onClick={hideDonePopup}>
            <   Button content = {"OK"}/>
            </div>
        </>
    );
}