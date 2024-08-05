"use client"
import { CiBookmarkCheck } from "react-icons/ci";
import { CiBatteryCharging } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { GoHome } from "react-icons/go";

import styles from "./navBar.module.css"

export default function NavBar({active, setActive,popup,setPopup,pmtSelected,setPmtSelected}) {
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
      
        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) return false;
        }
      
        return true;
      }
    const clickNavElement = (i) => {
        if(i == 0 && !arraysEqual(active,[1,0,0,0,0,0])){
            setPmtSelected(false);
            let activation = [0,0,0,0,0,0];
            activation[i] = 1;
            setActive(activation);
        }
        else{
            let activation = [0,0,0,0,0,0];
            activation[i] = 1;
            setActive(activation);
            if(!pmtSelected){
            setPopup(true);
            setActive([1,0,0,0,0,0]);
        }
        }
        
        
    }
    let i = 0;
    return (
        <div className={styles.navbar}>
            <ul>
                {
                [
                {title:"Accueil",icone : <GoHome size={24}/> ,},
                {title:"Departs",icone : <CiLogout size={24}/> ,},
                {title:"Recrutements",icone : <CiLogin size={24}/> ,},
                {title:"Effectifs/CSP",icone : <CiCalendar size={24}/> ,},
                {title:"Effectifs/activite",icone : <CiBatteryCharging size={24}/> ,},
                {title:"Evaluation Eff/CSP",icone : <CiBookmarkCheck size={24}/> ,}                 
                ]
                .map((ele, indx) =>(
                    <div className={active[indx]? `${styles.navElement} ${styles.activeNavElement} `:`${styles.navElement}`} onClick={() => clickNavElement(indx)}>
                        <span className={styles.navIcons}>{ele.icone}</span>
                        {ele.title}
                    </div>
                ))}
            </ul>
        </div>
    )
}