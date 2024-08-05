"use client"

import Image from "next/image";
import logo from "@/public/logo.png";
import { RiLock2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import './body.css';
import Link from "next/link" ;
import styles from "./page.module.css";
import Button from "../components/button"


export default function Login() {
    const [matricule,setMatricule] = useState("");
    const [password,setPassword] = useState("");
    const loginChangeHandler = (e)=>{
        if(e.target.name === "matricule"){
            setMatricule(e.target.value);
        }
        else if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    };
    const [champVide1,setChampVide1] = useState(false);
    const loginFocusHandler1 = ()=>{
        setChampVide1(true);
    };
    const [champVide2,setChampVide2] = useState(false);
    const loginFocusHandler2 = ()=>{
        setChampVide2(true);
    };
    const loginBlurHandler1 = (e)=>{
        if(e.target.value === ""){
            setChampVide1(false);
        }
    };
    const loginBlurHandler2 = (e)=>{
        if(e.target.value === ""){
            setChampVide2(false);
        }
    };
    return (
        <>
            <main className={styles.loginMain}>
                    <form action="" className={styles.leftSideform}>
                        <div className={styles.formTitle}>
                            <h2>LOGIN</h2>
                            <p>Bienvenu notre cher employe veillez entrer votres informations !</p>
                        </div>
                        <div className={styles.inputs}>
                            <div>
                                {!champVide1 &&
                                    <div className={styles.inputLabel}>
                                    <span><FiUser size={24}/></span>
                                    <p>Matricule</p>
                                    </div>
                                }
                                <input name="matricule" type="text" value={matricule}
                                 onChange={loginChangeHandler}
                                 onFocus={loginFocusHandler1} 
                                 onBlur={loginBlurHandler1}
                                 />
                            </div>
                            <div>
                                {!champVide2 &&
                                    <div className={styles.inputLabel}>
                                    <span><RiLock2Line size={24}/></span>
                                    <p>Mot De Passe</p>
                                    </div>
                                }
                                <input name="password" type="password" value={password}
                                 onChange={loginChangeHandler}
                                 onFocus={loginFocusHandler2} 
                                 onBlur={loginBlurHandler2}
                                 />
                            </div>
                            <Link className={styles.submition} href={"./statistiques"}>
                                <Button content={"Se Connecter"} />
                            </Link>
                        </div>
                    </form>


            </main>
            {/* <Footer /> */}
        </>
    );
}