
import { MdOutlineAdd } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import styles from "./accueilPMT.module.css" ;
import {useState,useEffect} from "react" ;
import Popup from "../popup";
import { save, findAll, findById, deleteById } from '../../API/pmtAPI';
import {toInstant , fromInstant,extractYearFromInstant,convertYearToInstant} from  '../../API/dateParsing';




/*import { save, findAll, findById, deleteById } from '../API/userAPI';
import {toInstant , fromInstant} from  '../API/dateParsing';

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
    console.log(comptes);*/


export default function AccueilPMT({pmtSelected,setPmtSelected,pmtThisYearSelected,setPmtThisYearSelected}){



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
    const handleCreatePMT = (newItem) => {
        save(newItem)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };
const handleDeletePMT = (id) => {
        deleteById(id)
            .then(() => fetchItems())
            .catch(error => setError(error.message));
    };


    const [popup,setPopup] = useState(false);
    const showPopup = () => {
        setPopup(true);
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

    const [failureSupp,setFailureSupp] = useState(false);
    const showPopupFailureSupp = () => {
        setFailureSupp(true);
    }

    const [deleteConfirm,setDeleteConfirm] = useState(false);
    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }

    const [pmtExist,setPmtExist] = useState(false);
    const showPmtExist = () => {
        setPmtExist(true);
    }


    let pmt = 
    items.map((item) => 
        (
            {
                id: item.id,
                anneeDeb: extractYearFromInstant(item.aneeDebut),
                duree: item.duration,
            }
        )
    );
    console.log(pmt);


    const [pmtActive,setPmtActive] = useState(pmt.map((ele,ind) => (0)));
    const selectionPMT = (indx) =>{
        let temp = pmt.map((ele,ind) => (0));
        if(pmtActive[indx] === 0){
            setPmtSelected(true);
            if(pmt[indx].anneeDeb === thisYear){
                setPmtThisYearSelected(true);
            }
            else{
                setPmtThisYearSelected(false);
            }
            temp[indx] = 1;
        }
        else{
            setPmtSelected(false);
            setPmtThisYearSelected(false);
        }
        setPmtActive(temp);
    }

        
    const thisYear = 2024;
    const [pmtForThisYear,setPmtForThisYear] = useState(false);
    const what = "PMT";

    let i = 0;
    while(i<pmt.length && !pmtForThisYear){
        if(pmt[i].anneeDeb == thisYear){
            setPmtForThisYear(true);
        }
        i++;
    }

    return(
        <>
            <div className={styles.tableControls}>
                <input type="text" className={styles.rechercheTable} placeholder={`Rechercher...`} />
                <div className={styles.rightControls}>
                    <button style={pmtForThisYear? {backgroundColor:"#C6C6C6"}:{}} onClick={pmtForThisYear? showPmtExist:showPopup} title="Ajouter PMT pour cette annee">
                        <MdOutlineAdd size={20} />
                    </button>
                </div>
            </div>

            <h3 className={styles.pmtSectionTitle}>Selectionner ou ajouter un pmt</h3>
            <section className={styles.pmtSection}>
            <div className={styles.pmtContainer}>
                    {
                    pmt.map((ele,ind)=>(
                        <div className={styles.cardPMT} style={pmtActive[ind] === 1 ?{backgroundColor:"#ddd",border: "2px solid var(--bright)"}:{}} onClick={()=>{selectionPMT(ind)}}>
                            <div className={styles.highPart}>
                                <div className={styles.iconeCard}>
                                        <IoStatsChartOutline className={styles.icone} size={25} color={"white"}/>
                                </div>
                            
                                <div className={styles.detailsPMT}>
                                    <p className={styles.anneePMT}>{ele.anneeDeb+" - "+(ele.anneeDeb + ele.duree)}</p>
                                    <p className={styles.dureePMT}>{ele.duree + " ans"}</p>
                                </div>
                            </div>
                        <div className={styles.downPart}>
                            {
                                ele.anneeDeb === thisYear && 
                                <>
                                    <button onClick={showPopupModifiy}>modifier</button>
                                    <button onClick={showDeleteConfirm}>supprimer</button>
                                </>
                            }
                        </div>
                    </div>
                    ))}
                
            </div>
            </section>
            {doneAjout && <Popup popup={doneAjout} setPopup={setDoneAjout} content={101} what={what}/>}
            {doneModif && <Popup popup={doneModif} setPopup={setDoneModif} content={102} what={what}/>}
            {deleteConfirm && <Popup popup={deleteConfirm} setPopup={setDeleteConfirm} popup2={doneSupp} setPopup2={setDoneSupp} content={0} what={what}/>}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={103} what={what}/>}
            {pmtExist && <Popup popup={pmtExist} setPopup={setPmtExist} content={34} what={what}/>}
            {failureSupp && <Popup popup={failureSupp} setPopup={setFailureSupp} content={113} what={what}/>}
            {popup && <Popup popup={popup} setPopup={setPopup} popup2={doneAjout} setPopup2={setDoneAjout} content={31} what={what}/>}
            {modify && <Popup popup={modify} setPopup={setModifiy} popup2={doneModif} setPopup2={setDoneModif} content={32} what={what}/>}
        </>
    );
}