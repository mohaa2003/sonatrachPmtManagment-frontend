import styles from "./statistiquesCard.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";



export default function StatistiquesCard({title,totalNumber,elements}){
    return(
        <div className={styles.card}>
            <h3>{title}</h3>
            <div className={styles.content}>
                {
                    elements.map((ele,indx)=>(
                        <div key={indx} className={styles.element}>
                            <span className={styles.elementTitle}>{ele.title}</span>
                            <span><FaLongArrowAltRight size={25}/></span>
                            <span className={styles.elementCount}>{ele.count}</span>
                        </div>
                    ))
                }
            </div>
            <hr />
            <p className={styles.totalNumber}>{totalNumber}</p>
        </div>
    );
}