import { useEffect, useRef } from "react";
import styles from "./Sorter.module.scss";

function Sorter() {
    const listElementA = useRef();
    useEffect(() => {
        let sorterElement = document.querySelector(`.${styles.sorter}`);
        listElementA.current = sorterElement.querySelectorAll('a');
    })

    var SelectSort = (event) => {
        Array.from(listElementA.current).forEach((elementA) => {
            elementA.className = elementA.className.replace(`${styles.active}`, '');
        })
        event.target.className = styles.active;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.sorter}>
                <a className = {styles.active} onClick = {SelectSort} href="/sort/default">Tất cả</a>
                <a onClick = {SelectSort} href="/">Bán chạy</a>
                <a onClick = {SelectSort} href="/">Đánh giá</a>
                <a onClick = {SelectSort} href="/">Giá thấp đến cao</a>
                <a onClick = {SelectSort} href="/">Giá cao đến thấp</a>
            </div>
        </div>
    );
}

export default Sorter;
