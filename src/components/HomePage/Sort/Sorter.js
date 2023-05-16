import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sorter.module.scss";
import React from "react";

function Sorter({ currentPage, amountPage }) {
    const listElementA = useRef();

    useEffect(() => {
        let sorterElement = document.querySelector(`.${styles.sorter}`);
        listElementA.current = sorterElement.querySelectorAll("a");

        let arrowLeftElement = document.querySelector(`.${styles.arrowLeft}`);
        let arrowRightElement = document.querySelector(`.${styles.arrowRight}`);
        if(currentPage === '' + 1) {
            arrowLeftElement.classList.add(styles.arrowDisable);
        }else {
            arrowLeftElement.classList.add(styles.arrowEnabel);
        }
        if(currentPage === amountPage) {
            arrowRightElement.classList.add(styles.arrowDisable);
        }else {
            arrowRightElement.classList.add(styles.arrowEnabel);
        }
    });

    var SelectTypeSort = (event) => {
        Array.from(listElementA.current).forEach((elementA) => {
            elementA.className = elementA.className.replace(`${styles.active}`, "");
        });
        event.target.className = styles.active;
    };

    var ClickArrowLeft = (event) => {
        if (currentPage > 1) {
        } else {
        }
    };

    var ClickArrowRight = (event) => {};

    return (
        <div className={styles.wrapper}>
            <div className={styles.sorter}>
                <a className={styles.active} onClick={SelectTypeSort} href="/sort/default">
                    Tất cả
                </a>
                <a onClick={SelectTypeSort} href="/">
                    Bán chạy
                </a>
                <a onClick={SelectTypeSort} href="/">
                    Đánh giá
                </a>
                <a onClick={SelectTypeSort} href="/">
                    Giá thấp đến cao
                </a>
                <a onClick={SelectTypeSort} href="/">
                    Giá cao đến thấp
                </a>
            </div>
            <div className={styles.navigate}>
                <div className={styles.paging}>
                    <span className={styles.current}>{currentPage}</span>/<span>{amountPage}</span>
                </div>
                <div className={styles.arrow}>
                    {/* <div onClick={ClickArrowLeft} className={styles.arrowLeft}>
                        <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
                    </div>
                    <div onClick={ClickArrowRight} className={styles.arrowRight}>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </div> */}
                    <FontAwesomeIcon
                        onClick={ClickArrowLeft}
                        className={styles.arrowLeft}
                        icon={faAngleLeft}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                        onClick={ClickArrowRight}
                        className={styles.arrowRight}
                        icon={faAngleRight}
                    ></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default Sorter;
