"use client"
import styles from "./personalInfo.module.css"
import Image from "next/image"
import img from "@/public/employe.png";
import Input from "../input";
import Button from "../button";
import { FaImage } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

// const list = [
//     {value:"5ans" , title:"+5"},
//     {value:"4ans" , title:"+4"},
//     {value:"3ans" , title:"+2"},
//     {value:"2ans" , title:"+3"}
// ]
export default function PersonalInfo(){
    return(
        <div className={styles.personalInfo}>
            <p className={styles.personalRole}>Utilisateur Standard</p>
            <div className={styles.personalProfil}>
                <Image src={img} width={120} height={120} alt="Employe Image" className={styles.imgPersonal}/>
                <p className={styles.personalName}>ABDELLI Said</p>
            </div>
            <div className={styles.inputs}>
                <Input value={"ABDELLI"} label={"Name"} width={"45%"} disabled={true}/>
                <Input value={"Said"} label={"Family Name"} width={"45%"} disabled={true}/>
                {/* <Input value={list[0].title} selectElement={list} label={"Family Name"} width={"45%"} /> */}
            </div>
            <div className={styles.buttons}>
                <Button content = {<FaImage size={20}/>} />
                <Button content = {<IoMdSettings size={20}/>}/>
            </div>
        </div>
    );
}