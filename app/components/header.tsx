import styles from "./header.module.css"
import { LuLogOut } from "react-icons/lu";
import { IoPerson } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link" ;
import Logo from "./logo";
import Popup from "./popup";

export default function Header({ pageTitle }) {

    const [popup,setPopup] = useState(false);
    const showPopup = () => {
        setPopup(true);
    }

    return (
        <header className={styles.header}>
            <div className={styles.pseudo}></div>
            <div className={styles.headerContainer}>
                <div className={styles.pageTitle}>
                    <Logo style={null} />
                    <h2>{pageTitle}</h2>
                </div>
                <div className={styles.headerAuthentif}>
                    <IoPerson onClick={showPopup} className={styles.fstChild} color="var(--bright)" size={30} cursor={"pointer"} title="Profile personnel"/>
                    <Link href={"/login"}>
                        <LuLogOut color="var(--bright)" size={30} cursor={"pointer"} title="Deconnecter"/>
                    </Link>
                </div>
            </div>
            {popup && <Popup popup={Popup} setPopup={setPopup} content={1}/>}
        </header>
    );
}