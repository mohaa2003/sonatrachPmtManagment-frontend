import styles from "./statPrevision.module.css";
import { MdOutlineAdd } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import { useState } from "react";
import Popup from "../popup";

export default function StatPrevision({title}/*{ elementList, title, tools, pmtSelected, setPmtSelected }*/) {
    const [popup, setPopup] = useState(false);
    const showPopup = () => {
        setPopup(true);
    }

    const [modify, setModifiy] = useState(false);
    const showPopupModifiy = () => {
        setModifiy(true);
    }


    const [doneAjout, setDoneAjout] = useState(false);
    const showPopupDoneAjout = () => {
        setDoneAjout(true);
    }

    const [doneModif, setDoneModif] = useState(false);
    const showPopupDoneModif = () => {
        setDoneModif(true);
    }

    const [doneSupp, setDoneSupp] = useState(false);
    const showPopupDoneSupp = () => {
        setDoneSupp(true);
    }

    const [failureSupp, setFailureSupp] = useState(false);
    const showPopupFailureSupp = () => {
        setFailureSupp(true);
    }

    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const showDeleteConfirm = () => {
        setDeleteConfirm(true);
    }



    const what = "L'employe";

    return (
        <>
            <h3 className={styles.title}>{title}</h3>
            {/*tools &&*/
                <div className={styles.tableControls}>
                    <input type="text" className={styles.rechercheTable} placeholder={`Rechercher...`} />
                    <div className={styles.rightControls}>
                        <button onClick={showPopup} title="Ajouter une prevision">
                            <MdOutlineAdd size={20} />
                        </button>
                        <button title="Telecharger le fichier (.xsl)">
                            <FaDownload size={20} />
                        </button>
                    </div>
                </div>}
            <div className={styles.departTable} style={/*tools ?*/ { marginTop: "10px", maxHeight: "45vh" } /*: { marginTop: "20px", maxHeight: "53vh" }*/}>
                {/* <table>
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
                </table> */}
                <table >
                    <thead><tr><th title="Field #1">FIELD1</th>
                        <th title="Field #2">FIELD2</th>
                        <th title="Field #3">FIELD3</th>
                        <th title="Field #4">FIELD4</th>
                        <th title="Field #5">FIELD5</th>
                        <th title="Field #6">FIELD6</th>
                        <th title="Field #7">FIELD7</th>
                        <th title="Field #8">FIELD8</th>
                        <th title="Field #9">FIELD9</th>
                        <th title="Field #10">FIELD10</th>
                        <th title="Field #11">FIELD11</th>
                        <th title="Field #12">FIELD12</th>
                        <th title="Field #13">FIELD13</th>
                        <th title="Field #14">FIELD14</th>
                        <th title="Field #15">FIELD15</th>
                        <th title="Field #16">FIELD16</th>
                        <th title="Field #17">FIELD17</th>
                        <th title="Field #18">FIELD18</th>
                    </tr></thead>
                    <tbody><tr>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td>PREVISIONS  Clôture 2022</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td>PREVISIONS  2023</td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                        <td> </td>
                    </tr>
                        <tr>
                            <td>CSP</td>
                            <td> </td>
                            <td>Rappel Situation des effectifs au 31/12/2021    (1)</td>
                            <td>Départs       </td>
                            <td> </td>
                            <td> </td>
                            <td>Recrutements </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>Effectifs      4 =1-2+3</td>
                            <td>Départs  (5)</td>
                            <td>Recrutements </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>Effectifs  7= 4-5+6</td>
                            <td>%Variation P2023/PC2022   </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>Externes</td>
                            <td> </td>
                            <td>Internes</td>
                            <td>T. Recrut   (3)</td>
                            <td> </td>
                            <td> </td>
                            <td>Externes</td>
                            <td> </td>
                            <td>Internes</td>
                            <td>T. Recrut  (6)</td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>Définitifs</td>
                            <td>Internes</td>
                            <td>Total DEPART (2)</td>
                            <td>TOTAL</td>
                            <td>Dont Retours Formation</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>TOTAL</td>
                            <td>Dont Retours Formation</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>CADRES</td>
                            <td>Ingénieurs et +</td>
                            <td>96</td>
                            <td>22</td>
                            <td>2</td>
                            <td>24</td>
                            <td>30</td>
                            <td> </td>
                            <td>2</td>
                            <td>32</td>
                            <td>104</td>
                            <td>4</td>
                            <td>8</td>
                            <td> </td>
                            <td> </td>
                            <td>8</td>
                            <td>108</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Cadres U.</td>
                            <td>6</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>1</td>
                            <td>2</td>
                            <td>8</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>3</td>
                            <td>3</td>
                            <td>11</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Autres Cadres</td>
                            <td>27</td>
                            <td>4</td>
                            <td> </td>
                            <td>4</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>23</td>
                            <td>1</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>22</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>TOTAL</td>
                            <td>129</td>
                            <td>26</td>
                            <td>2</td>
                            <td>28</td>
                            <td>30</td>
                            <td> </td>
                            <td>3</td>
                            <td>33</td>
                            <td>134</td>
                            <td>5</td>
                            <td>8</td>
                            <td> </td>
                            <td>3</td>
                            <td>11</td>
                            <td>141</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td> dt C Sup</td>
                            <td>35</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>35</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>MAITRISE</td>
                            <td>T. Sup</td>
                            <td>17</td>
                            <td> </td>
                            <td>1</td>
                            <td>1</td>
                            <td> </td>
                            <td> </td>
                            <td>1</td>
                            <td>1</td>
                            <td>17</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>5</td>
                            <td>5</td>
                            <td>22</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Techniciens</td>
                            <td>8</td>
                            <td>4</td>
                            <td> </td>
                            <td>4</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>4</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>4</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Autres</td>
                            <td>19</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>19</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>19</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>TOTAL</td>
                            <td>44</td>
                            <td>4</td>
                            <td>1</td>
                            <td>5</td>
                            <td> </td>
                            <td> </td>
                            <td>1</td>
                            <td>1</td>
                            <td>40</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>5</td>
                            <td>5</td>
                            <td>45</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>EXECUTION</td>
                            <td>Technique</td>
                            <td>3</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>3</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>3</td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Adm</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>Aides</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td> </td>
                            <td>TOTAL</td>
                            <td>3</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>3</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>3</td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
            </div>







                










            
            {doneAjout && <Popup popup={doneAjout} setPopup={setDoneAjout} content={101} what={what} />}
            {doneModif && <Popup popup={doneModif} setPopup={setDoneModif} content={102} what={what} />}
            {deleteConfirm && <Popup popup={deleteConfirm} setPopup={setDeleteConfirm} popup2={doneSupp} setPopup2={setDoneSupp} content={0} what={what} />}
            {doneSupp && <Popup popup={doneSupp} setPopup={setDoneSupp} content={103} what={what} />}
            {failureSupp && <Popup popup={failureSupp} setPopup={setFailureSupp} content={113} what={what} />}
            {popup && <Popup popup={popup} setPopup={setPopup} popup2={doneAjout} setPopup2={setDoneAjout} content={31} what={what} />}
            {modify && <Popup popup={modify} setPopup={setModifiy} popup2={doneModif} setPopup2={setDoneModif} content={32} what={what} />}
        </>
    );
}
// Prevision.defaultProps = {
//     tools: false
// }