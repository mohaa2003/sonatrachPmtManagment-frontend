import styles from "./deleteConfirmation.module.css";
import Button from "../button";

const SUPP = 1;
const ARCH = 2;
const UNARCH = 3;
const DESACTIV = 4;

export default function DeleteConfirmation({what,deleteConfirm,setDeleteConfirm,popup2,setPopup2,status}){

let text1;
if(status==SUPP){
    text1 = " sera supprime ";
}
else if(status==ARCH){
    text1 = " sera archive ";
}
else if(status==UNARCH){
    text1 = " sera desarchive ";
}
else if(status==UNARCH){
    text1 = " sera desactive ";
}

let text2 = "Vous etes sur ?";
let cancelConfirm = ()=>{
    setDeleteConfirm(false);
    
}
let okConfirm = ()=>{
    setDeleteConfirm(false);
    setPopup2(true);
}
    return(
        <>
            <h3 className={styles.deleteConfirmTitlt}>{what+text1}</h3>
            <h3 className={styles.deleteConfirmTitlt}>{text2}</h3>
            <div className={styles.buttons}>
                <div className={styles.btnContainer} onClick={okConfirm}>
                    <Button content = {"OK"}/>
                </div>

                <div className={styles.btnContainer} onClick={cancelConfirm}>
                    <Button content = {"ANNULER"}/>
                </div>
            </div>
        </>
    );
}