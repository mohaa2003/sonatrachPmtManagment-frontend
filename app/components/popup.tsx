import ArchivedForm from "./forms/archived";
import DeleteConfirmation from "./forms/deleteConfirmation";
import DepartForm from "./forms/departs";
import DonePopup from "./forms/donePopup";
import EmployeForm from "./forms/employe";
import PersonalInfo from "./forms/personalInfo";
import PmtForm from "./forms/pmt";
import RecrutementForm from "./forms/recrutements";
import UserForm from "./forms/user";
import styles from "./popup.module.css";

const SUPP_CONFIRM = 0;
const ARCH_CONFIRM = 201;
const UNARCH_CONFIRM = 202;
const DESAC_CONFIRM = 203;
const PERS_INFO = 1;
const PMT_AJOUT = 31;
const PMT_MODIF = 32;
const PMT_NOT_SELECTED = 33;
const PMT_EXISTED = 34;
const EMP_AJOUT = 21;
const EMP_MODIF = 22;
const USER_AJOUT = 41;
const ARCH_MODIF = 51;
const ARCH_AJOUT = 52;
const DEPART_AJOUT = 61;
const DEPART_MODIF = 62;
const RECT_AJOUT = 71;
const RECT_MODIF = 72;
const DONE_AJOUT = 101;
const DONE_MODIF = 102;
const DONE_SUPP = 103;
const DONE_ARCH = 104;
const DONE_UNARCH = 105;
const DONE_UNACT = 106;
const DONE_VALIDE = 107;
const DONE_INVALIDE = 108;
const FAILURE_AJOUT = 111;
const FAILURE_MODIF = 112;
const FAILURE_SUPP = 113;
const FAILURE_ARCH = 114;
const FAILURE_UNARSH = 115;
const FAILURE_UNACT = 116;


export default function Popup({popup,setPopup,popup2,setPopup2,popup3,setPopup3,content,what}){
    const dropPopup = () => {
        setPopup(false);
    }
    return(
        <>
        {
            popup &&
            <>
                <div className={styles.overly} onClick = {dropPopup}>        
                </div>
                <div className={styles.popup}>
                    {(content == PERS_INFO) && <PersonalInfo/>}
                    {(content == PMT_AJOUT) && <PmtForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={1}/>}
                    {(content == PMT_MODIF) && <PmtForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={2}/>}
                    {(content == EMP_AJOUT) && <EmployeForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={1}/>}
                    {(content == EMP_MODIF) && <EmployeForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={2}/>}
                    {(content == DEPART_AJOUT) && <DepartForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={1}/>}
                    {(content == DEPART_MODIF) && <DepartForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={2}/>}
                    {(content == RECT_AJOUT) && <RecrutementForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={1}/>}
                    {(content == RECT_MODIF) && <RecrutementForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={2}/>}
                    {(content == USER_AJOUT) && <UserForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2}/>}
                    {(content == ARCH_AJOUT) && <ArchivedForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={1}/>}
                    {(content == ARCH_MODIF) && <ArchivedForm popup={popup} setPopup={setPopup} popup2={popup2} setPopup2={setPopup2} ajoutOuModification={2}/>}
                    {(content == DONE_AJOUT) && <DonePopup what={what} action={1} status={1} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_MODIF) && <DonePopup what={what} action={1} status={2} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_SUPP) && <DonePopup what={what} action={1} status={3} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_ARCH) && <DonePopup what={what} action={1} status={4} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_UNARCH) && <DonePopup what={what} action={1} status={5} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_UNACT) && <DonePopup what={what} action={1} status={6} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_VALIDE) && <DonePopup what={what} action={1} status={9} popup={popup} setPopup={setPopup}/>}
                    {(content == DONE_INVALIDE) && <DonePopup what={what} action={2} status={9} popup={popup} setPopup={setPopup}/>}
                    {(content == FAILURE_AJOUT) && <DonePopup what={what} action={2} status={1} popup={popup} setPopup={setPopup}/>}
                    {(content == FAILURE_MODIF) && <DonePopup what={what} action={2} status={2} popup={popup} setPopup={setPopup}/>}
                    {(content == FAILURE_SUPP) && <DonePopup what={what} action={2} status={3} popup={popup} setPopup={setPopup}/>}
                    {(content == FAILURE_ARCH) && <DonePopup what={what} action={2} status={4} popup={popup} setPopup={setPopup}/>}
                    {(content == FAILURE_UNARSH) && <DonePopup what={what} action={2} status={5} popup={popup} setPopup={setPopup}/>}
                    {(content == FAILURE_UNACT) && <DonePopup what={what} action={2} status={6} popup={popup} setPopup={setPopup}/>}
                    {(content == PMT_NOT_SELECTED) && <DonePopup what={what} action={2} status={7} popup={popup} setPopup={setPopup}/>}
                    {(content == PMT_EXISTED) && <DonePopup what={what} action={3} status={8} popup={popup} setPopup={setPopup}/>}
                    {(content == SUPP_CONFIRM) && <DeleteConfirmation what={what} deleteConfirm={popup} setDeleteConfirm={setPopup} popup2={popup2} setPopup2={setPopup2} status={1}/>}
                    {(content == ARCH_CONFIRM) && <DeleteConfirmation what={what} deleteConfirm={popup} setDeleteConfirm={setPopup} popup2={popup2} setPopup2={setPopup2} status={2}/>}
                    {(content == UNARCH_CONFIRM) && <DeleteConfirmation what={what} deleteConfirm={popup} setDeleteConfirm={setPopup} popup2={popup2} setPopup2={setPopup2} status={3}/>}
                    {(content == DESAC_CONFIRM) && <DeleteConfirmation what={what} deleteConfirm={popup} setDeleteConfirm={setPopup} popup2={popup2} setPopup2={setPopup2} status={4}/>}
                </div> 
            </>
        }
            
        </>
    );
}
Popup.defaultProps = {
    what : "",
    setPopup2 : ()=>{},
    popup2 : true,
    setPopup3 : ()=>{},
    popup3 : true,
}