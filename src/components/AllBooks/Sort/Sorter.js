import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sorter.module.scss";
import React from "react";
import { Link } from "react-router-dom";

function Sorter({ currentPage, amountPage }) {
    const listElementA = useRef();

    useEffect(() => {
        let sorterElement = document.querySelector(`.${styles.sorter}`);
        listElementA.current = sorterElement.querySelectorAll("a");

        let arrowLeftElement = document.querySelector(`.${styles.arrowLeft}`);
        // let arrowRightElement = document.querySelector(`.${styles.arrowRight}`);
        if(currentPage === '' + 1) {
            arrowLeftElement.classList.add(styles.arrowDisable);
        }else {
            arrowLeftElement.classList.add(styles.arrowEnabel);
        }
    }, );

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
                <Link className={styles.active} onClick={SelectTypeSort} to="/">
                    Tất cả
                </Link>
                <Link onClick={SelectTypeSort} to="/">
                    Bán chạy
                </Link>
                <Link onClick={SelectTypeSort} to="/">
                    Đánh giá
                </Link>
                <Link onClick={SelectTypeSort} to="/">
                    Giá thấp đến cao
                </Link>
                <Link onClick={SelectTypeSort} to="/">
                    Giá cao đến thấp
                </Link>
            </div>
            <div className={styles.navigate}>
                <div className={styles.paging}>
                    <span className={styles.current}>{currentPage}</span>/<span>{amountPage}</span>
                </div>
                <div className={styles.arrow}>
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
