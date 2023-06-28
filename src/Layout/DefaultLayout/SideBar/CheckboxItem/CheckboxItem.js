import { useEffect, useRef } from 'react';
import styles from './CheckboxItem.module.scss'

function CheckboxItem({children, clickCheckbox, id, className}) {

    let spanRef = useRef();
    useEffect(() => {
        if (spanRef.current.offsetHeight < spanRef.current.scrollHeight) {
            let content = spanRef.current.textContent;
            while (spanRef.current.offsetHeight < spanRef.current.scrollHeight) {
                content = content.slice(0, -1);
                spanRef.current.textContent = content + "...";
            }
        }
    }, []);
    return (
        <label onChange = {clickCheckbox} className = {styles.checkboxItem}>
            <input  className = {className} id = {id} type="checkbox"/>
            <span ref={spanRef} >{children}</span>
        </label>
    );
}

export default CheckboxItem;
