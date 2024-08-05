import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Popup from "../popup";
import styles from "./pmt.module.css";
   
const persons = [
    {
    codeFunction: 121988,
    structure: "Departement d'Informatique",
    nom: "BOUGUERRI",
    prenom: "Mohamed Ilyes",
    sexe: "H",
    dateNaiss: "03/04/1990",
    dateRect: "03/04/2024",
    diplome: "Licence en Informatique",
    valDip: 15,
    mat: "999999p",
    lieu: "Alger Centre",
    echelle: 25,
    function: "chef"
  },
  {
    codeFunction: 121989,
    structure: "Departement d'Informatique",
    nom: "BENTALEB",
    prenom: "Amina",
    sexe: "F",
    dateNaiss: "12/06/1992",
    dateRect: "15/09/2020",
    diplome: "Master en Réseaux",
    valDip: 18,
    mat: "123456p",
    lieu: "Bab El Oued",
    echelle: 22,
    function: "professeur"
  },
  {
    codeFunction: 121990,
    structure: "Departement de Mathématiques",
    nom: "MERZOUG",
    prenom: "Sofiane",
    sexe: "H",
    dateNaiss: "10/02/1985",
    dateRect: "01/11/2010",
    diplome: "Master en Mathématiques Appliquées",
    valDip: 16,
    mat: "789012p",
    lieu: "Hussein Dey",
    echelle: 28,
    function: "enseignant"
  },
  {
    codeFunction: 121991,
    structure: "Departement de Physique",
    nom: "BENKHELIFA",
    prenom: "Yasmine",
    sexe: "F",
    dateNaiss: "22/11/1988",
    dateRect: "15/03/2012",
    diplome: "PhD en Physique Théorique",
    valDip: 20,
    mat: "345678p",
    lieu: "El Harrach",
    echelle: 24,
    function: "chercheuse"
  },
  {
    codeFunction: 121992,
    structure: "Departement de Chimie",
    nom: "ZOUAOUI",
    prenom: "Nassim",
    sexe: "H",
    dateNaiss: "05/05/1975",
    dateRect: "20/10/2000",
    diplome: "Licence en Chimie Organique",
    valDip: 14,
    mat: "112233p",
    lieu: "Bir Mourad Raïs",
    echelle: 23,
    function: "professeur"
  },
  {
    codeFunction: 121993,
    structure: "Departement de Biologie",
    nom: "SAADI",
    prenom: "Fadila",
    sexe: "F",
    dateNaiss: "17/07/1980",
    dateRect: "01/02/2005",
    diplome: "Master en Biologie Cellulaire",
    valDip: 17,
    mat: "445566p",
    lieu: "Birkhadem",
    echelle: 26,
    function: "chercheuse"
  },
  {
    codeFunction: 121994,
    structure: "Departement d'Histoire",
    nom: "BELHADJ",
    prenom: "Rachid",
    sexe: "H",
    dateNaiss: "11/11/1978",
    dateRect: "11/11/2004",
    diplome: "Licence en Histoire Moderne",
    valDip: 15,
    mat: "778899p",
    lieu: "Bab Ezzouar",
    echelle: 27,
    function: "enseignant"
  },
  {
    codeFunction: 121995,
    structure: "Departement de Géographie",
    nom: "BOUAMRANE",
    prenom: "Khaled",
    sexe: "H",
    dateNaiss: "23/03/1983",
    dateRect: "10/10/2009",
    diplome: "Master en Géographie Humaine",
    valDip: 16,
    mat: "998877p",
    lieu: "El Madania",
    echelle: 21,
    function: "chercheur"
  },
  {
    codeFunction: 121996,
    structure: "Departement de Philosophie",
    nom: "GHENIM",
    prenom: "Samiha",
    sexe: "F",
    dateNaiss: "08/08/1985",
    dateRect: "01/01/2011",
    diplome: "Licence en Philosophie Politique",
    valDip: 15,
    mat: "665544p",
    lieu: "Kouba",
    echelle: 20,
    function: "enseignante"
  },
  {
    codeFunction: 121997,
    structure: "Departement de Sociologie",
    nom: "BENMANSOUR",
    prenom: "Amine",
    sexe: "H",
    dateNaiss: "14/04/1990",
    dateRect: "14/04/2015",
    diplome: "Master en Sociologie Urbaine",
    valDip: 18,
    mat: "223344p",
    lieu: "Ain Benian",
    echelle: 22,
    function: "chercheur"
  }
];

export default function UserForm({popup,setPopup,popup2,setPopup2}){

    
    const [failureAjout,setFailureAjout] = useState(false);
    const showPopupFailureAjout = () => {
        setFailureAjout(true);
    }
    
    
    const showPopupDoneAjout = ()=>{
            setPopup(false);
            setPopup2(true);
        }



    const what = "L'utilisateur";
    return(
        <>
            <h3 className={styles.titleForm}>{"Ajouter Un Utilisateur"}</h3>
            <div className={styles.inputs}>
                <Input value={"99999P  Bouguerri Mohamed Ilyes"} label={"choisir le nouveau utilisateur parmi les employe"} width={"100%"} selectElement={persons.map((ele,ind)=>({title : ele.mat+" .... "+ele.nom+" "+ele.prenom,value : "val"+ind,}))}/>
           </div>

            <div className={styles.buttons} onClick={showPopupDoneAjout}>
                    <Button content = {"Ajouter"}/>
            </div>
            {failureAjout && <Popup popup={failureAjout} setPopup={setFailureAjout} content={111} what={what}/>}
        </>

    );
}