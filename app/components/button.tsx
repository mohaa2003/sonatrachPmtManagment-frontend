import styles from "./button.module.css";
export default function Button({width,content}){
    return(
        <button className={styles.button} style={{width : width}}>{content}</button>
    );
}
Button.defaultProps = {
    width : "",
    content : "",
}