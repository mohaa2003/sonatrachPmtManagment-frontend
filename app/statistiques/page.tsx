"use client"
import Header from "../components/header"
import Footer from "../components/footer";
import ListGetter from "../components/listGetter";
import styles from "./page.module.css"
import MiniAside from "../components/miniAside";
import { useState } from "react";
import StatistiquesCard from "../components/statistiquesCard";

let elements1 = [
  {title : "ING",count : 140,},
  {title : "CU",count : 22,},
  {title : "AC",count : 100,},
  {title : "CS",count : 128,},
];

let elements2 = [
  {title : "TS",count : 60,},
  {title : "TECHNICIEN",count : 22,},
  {title : "TECHNIQUE",count : 40,},
];

let elements3 = [
  {title : "ADM",count : 110,},
  {title : "AIDE",count : 28,},
  {title : "AUTRE",count : 85,},
];


let elements4 = [
  {title : "Recherche  Hydrocarbures",count : 60,},
  {title : "Exploitation  Gisements",count : 22,},
  {title : "Transport  Hydrocarbures",count : 40,},
  {title : "Transformation  Hyd",count : 60,},
  {title : "Commercialisation  Hyd",count : 22,},
  {title : "Etudes  Développement",count : 40,},
  {title : "Suivi  Réalisation",count : 60,},
  {title : "Maintenance  Industrielle",count : 22,},
  {title : "Sécurité  Industrielle",count : 40,}
];


let elements5 = [
  {title : "Gestion des Stocks",count : 110,},
  {title : "Organisation / Planification",count : 28,},
  {title : "Finances / Comptabilité",count : 85,},
  {title : "Juridique",count : 110,},
  {title : "Ressources  Humaines",count : 28,},
  {title : "Ressources  Humaines",count : 85,},
  {title : "Gestion du Pers",count : 110,},
  {title : "Informatique",count : 28,},
  {title : "Filière Santé ",count : 85,},
  {title : "Autres postes FST",count : 85,}
];  

let elements6 = [
  {title : "Réalisation",count : 110,},
  {title : "Agriculture",count : 28,},
  {title : "Filière Secrétariat",count : 85,},
  {title : "Moyens  Généraux",count : 110,},
  {title : "Oeuvres S",count : 28,},
  {title : "Relations Extérieures",count : 85,},
  {title : "Autres postes FSP",count : 85,}
];
export default function Statistiques(){
    
    const [aside,setAside] = useState(false);
    const defaultActifElementStatus = [1,0,0,0,0] ;
    return(
        <>
            <ListGetter aside = {aside} setAside = {setAside} defaultActifElementStatus={defaultActifElementStatus}/>
            <Header pageTitle={"Statistiques de 2024"} />
            <MiniAside  miniAsideActivation={defaultActifElementStatus}/>
            <div style={aside? {width : "calc(100vw - 200px)",} : {}} className={`main ${styles.mainStatistiques}`}>

                <h2>Nombre Total d'employes : 789</h2>
                <div className={styles.statistiquesGroupContainer}>
                  <h3 className={styles.statistiquesGroupTitle}>Effective Par CSP</h3>
                  <div className={styles.statistiquesGroup}>
                    <StatistiquesCard title={"Cadre"} totalNumber={388} elements={elements1} />
                    <StatistiquesCard title={"METRISE"} totalNumber={122} elements={elements2} />
                    <StatistiquesCard title={"EXECUTION"} totalNumber={223} elements={elements3} />
                  </div>
                </div>

                <div className={styles.statistiquesGroupContainer}>
                  <h3 className={styles.statistiquesGroupTitle}>Effective Par Activite</h3>
                  <div className={styles.statistiquesGroup}>
                    <StatistiquesCard title={"FST"} totalNumber={388} elements={elements4} />
                    <StatistiquesCard title={"FCM"} totalNumber={122} elements={elements5} />
                    <StatistiquesCard title={"FSP"} totalNumber={122} elements={elements6} />
                  </div>
                </div>
            </div>
            <Footer />
            </>
         );
}