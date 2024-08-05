import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p>&#169; 2023 <span className={styles.specialWord}>Sonatrach</span> ,Tous droits réservé</p>
        </footer>
    );
}