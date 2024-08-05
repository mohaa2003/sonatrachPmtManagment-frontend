import styles from "./input.module.css"
import { useState } from "react";

export default function Input({type,label,placeholder,value,width,disabled,selectElement,onChange}){

    const [valueInput,setValueInput] = useState(value);
    const changeInputValue = (e) =>{
        setValueInput(e.target.value);
    }
    return(
        <div className={styles.inputContainer}  style={{width : width}}>
            {label !== "" && <label className={styles.labelComponent}>{label}</label>}
            {selectElement.length === 0 ?
                <input className={styles.inputComponent} type={type} placeholder={placeholder} value={valueInput} onChange={changeInputValue} disabled={disabled}/>
            :   <select className={styles.inputComponent}  disabled={disabled} onChange={onChange}>
                    {
                        selectElement.map((ele,indx) => 
                            <option key={indx} value={ele.value}>{ele.title}</option>
                        )
                    }
                </select>
            }
        </div>
    );
}
Input.defaultProps = {
    type : "text",
    label : "",
    placeholder : "",
    value : "",
    width : "100%",
    disabled : false,
    selectElement : [],
    onChange : ()=>{},
}