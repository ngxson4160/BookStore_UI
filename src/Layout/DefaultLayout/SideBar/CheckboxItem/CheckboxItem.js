import styles from './CheckboxItem.module.scss'

function CheckboxItem({children, clickCheckbox, id, className}) {
    return (
        <label onChange = {clickCheckbox} className = {styles.checkboxItem}>
            <input  className = {className} id = {id} type="checkbox"/>
            <span >{children}</span>
        </label>
    );
}

export default CheckboxItem;
