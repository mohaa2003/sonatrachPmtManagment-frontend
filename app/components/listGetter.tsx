"use client"
import { useState } from "react";
import { BsList } from "react-icons/bs";
import Aside from "./aside";
import styles from "./listGetter.module.css";

export default function ListGetter({aside,setAside,defaultActifElementStatus}){
    const asideAppear = ()=>{
        setAside(!aside);
    }

    return(
        <>
        <div className={styles.listGetter}>
            <button onClick={asideAppear}><BsList className={styles.icon} size={35} color={aside? "#eeeeee" : "white"}/></button>
        </div>
        {
            aside &&
            <div className={styles.scrolledAside}>
                <Aside asideActivation={defaultActifElementStatus}/>
            </div>
        }
        </>
    );
}
