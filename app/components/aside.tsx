import { IoStatsChartSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import styles from "./aside.module.css";
import Logo from "./logo";
import {useState} from "react";
import Link from "next/link" ;

export default function Aside({asideActivation}){
    const [actifAside,setActifAside] = useState(asideActivation);
    const clickAsideElement = (i) => {
        let activation = [0,0,0,0,0,0];
        activation[i] = 1;
        setActifAside(activation);
    }
    return(
        <aside className={styles.aside}>
            <div className={styles.topAside}>
                {/* <h2>Menu</h2> */}
                <Logo style={null}/>
            </div>

            <div className={styles.bottomAside}>
                    <Link href={"/statistiques"} className={`${styles.titleAside}` + (actifAside[0]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`) }  onClick={() => clickAsideElement(0)}>
                        <span><IoStatsChartSharp size={23}/></span>
                        <h2>Statistiques</h2>
                    </Link>
                
                    <Link href={"/listeDesPersonelles"} className={`${styles.titleAside}` + (actifAside[1]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`) }  onClick={() => clickAsideElement(1)}>
                        <span><FaList size={23}/></span>
                        <h2>Liste du personnel</h2>
                    </Link>
                
                    <Link href={"/listeDesPersonellesArchive"} className={`${styles.titleAside}` + (actifAside[2]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`) }  onClick={() => clickAsideElement(2)}>
                        <span><FaArchive size={23}/></span>
                        <h2>Liste du personnel archivé</h2>
                    </Link>
                
                    <Link href={"/pmt"} className={`${styles.titleAside}` + (actifAside[3]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`) }  onClick={() => clickAsideElement(3)}>
                        <span><MdAccessTimeFilled size={25}/></span>
                        <h2>PMT</h2>
                    </Link>
                
                    <Link href={"/listeDesUtilisateur"} className={`${styles.titleAside}` + (actifAside[4]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`) }  onClick={() => clickAsideElement(4)}>
                        <span><MdManageAccounts size={25}/></span>
                        <h2>Gestion des comptes</h2>
                    </Link>
                
            </div>
        </aside>
    );
}