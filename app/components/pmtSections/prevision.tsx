import styles from "./prevision.module.css";
import { MdOutlineAdd } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import {useState} from "react" ;
import Popup from "../popup";

export default function Prevision({elementList,title,tools,pmtSelected,setPmtSelected,pmtThisYearSelected,onDownald}) {
    const [popupDepart,setPopupDepart] = useState(false);
    const showPopupDepart = () => {
        setPopupDepart(true);
    }

    const [popupRect,setPopupRect] = useState(false);
    const showPopupRect = () => {
        setPopupRect(true);
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

    const [failureSupp,setFailureSupp] = useState(false);
    const showPopupFailureSupp = () => {
        setFailureSupp(true);
    }

    const [deleteConfirm,setDeleteConfirm] = useState(false);
    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }

    const choosePopupAjout = ()=>{
        if(title == "Prevision Des Departs"){
            showPopupDepart();
        }
        else if(title == "Prevision Des Recrutements"){
            showPopupRect();
        }
    }




    const what = "La prevision";

    return (
        <>
            <h3 className={styles.title}>{title}</h3>
            {tools &&
                <div className={styles.tableControls}>
                <input type="text" className={styles.rechercheTable} placeholder={`Rechercher...`} />
                <div className={styles.rightControls}>
                    {pmtThisYearSelected && <button onClick={choosePopupAjout} title="Ajouter une prevision">
                        <MdOutlineAdd size={20} />
                    </button>}
                    <button onClick={onDownald} title="Telecharger le fichier (.xsl)">
                        <FaDownload size={20} />
                    </button>
                </div>
            </div>}
            <div className={styles.departTable}  style = {tools? {marginTop : "10px",maxHeight: "45vh"}:{marginTop : "20px",maxHeight: "53vh"}}>
                <table>
                    {elementList.map((ele, indx) => (
                        <tr>
                            {indx === 0 ? (
                                    ele.map((el) => (
                                        <th>{el}</th>
                                    ))
                            ) : (
                                <>
                                    <td>{indx}</td>
                                    {ele.map((el) => (
                                        <td >{el}</td>
                                    ))}
                                </>
                            )}
                        </tr>
                    ))}
                </table>
            </div>
            {doneAjout && <Popup popup={doneAjout} setPopup={setDoneAjout} content={101} what={what}/>}
            {doneModif && <Popup popup={doneModif} setPopup={setDoneModif} content={102} what={what}/>}
            {deleteConfirm && <Popup popup={deleteConfirm} setPopup={setDeleteConfirm} popup2={doneSupp} setPopup2={setDoneSupp} content={0} what={what}/>}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={103} what={what}/>}
            {failureSupp && <Popup popup={failureSupp} setPopup={setFailureSupp} content={113} what={what}/>}
            {popupDepart && <Popup popup={popupDepart} setPopup={setPopupDepart} popup2={doneAjout} setPopup2={setDoneAjout} content={61} what={what}/>}
            {popupRect && <Popup popup={popupRect} setPopup={setPopupRect} popup2={doneAjout} setPopup2={setDoneAjout} content={71} what={what}/>}
            
        </>
    );
}
Prevision.defaultProps = {
    tools : false
}