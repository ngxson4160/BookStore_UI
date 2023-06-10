import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavigateBottom.module.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";


function NavigateBottom({currentPage, amountPage}) {
    return (
        <div>
        <div id = {styles.wrapper} className = {styles.wrapper}>
            <ul className={styles.navigate}>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link + ' ' + styles.active}>1</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>2</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>3</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>4</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>5</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>...</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>{amountPage}</a>
                </li>
                <li className={styles.navigateItem}>
                    <a href="/" className={styles.link}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </li>
            </ul>
        </div>
        </div>
    );
}

export default NavigateBottom;
