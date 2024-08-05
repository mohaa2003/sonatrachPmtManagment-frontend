"use client"
import { IoStatsChartSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import styles from "./miniAside.module.css";
import { useState } from "react";
import Link from "next/link" ;

export default function MiniAside({miniAsideActivation}) {
    
    const [actif,setActif] = useState(miniAsideActivation);
    const clickAsideElement = (i) => {
        let activation = [0,0,0,0,0,0];
        activation[i] = 1;
        setActif(activation);
    }
    return (
            <aside className={styles.aside}>
                <Link href={"/statistiques"}>
                    <div className={`${styles.titleAside}` + (actif[0]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`) }  onClick={() => clickAsideElement(0)} title="Statistiques" >
                        <span><IoStatsChartSharp size={23} /></span>
                    </div>
                </Link>

                <Link href={"/listeDesPersonelles"}>
                    <div className={`${styles.titleAside}` + (actif[1]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`)}  onClick={() => clickAsideElement(1)} title="Liste du personnel">
                        <span><FaList size={23} /></span>
                    </div>
                </Link>

                <Link href={"/listeDesPersonellesArchive"}>
                    <div className={`${styles.titleAside}` + (actif[2]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`)}  onClick={() => clickAsideElement(2)} title="Liste du personnel archivé">
                        <span><FaArchive size={23} /></span>
                    </div>
                </Link>

                <Link href={"/pmt"}>
                        <div className={`${styles.titleAside}` + (actif[3]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`)}  onClick={() => clickAsideElement(3)} title="PMT">
                            <span><MdAccessTimeFilled size={25} /></span>
                        </div>
                </Link>
                    
                    
                <Link href={"/listeDesUtilisateur"}>
                    <div className={`${styles.titleAside}` + (actif[4]? `  ${styles.titleAsideActif}` : ` ${styles.hoverTitleAside}`)}  onClick={() => clickAsideElement(4)} title="Gestion des comptes">
                        <span><MdManageAccounts size={25} /></span>
                    </div>
                </Link>
            </aside>
    );
}

