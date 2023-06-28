import React from "react";
import ReactDOMServer from "react-dom/server";

import styles from "./SlideShow.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function SlideShow({ heading, children }) {
    // var childrenElement = [];
    // React.Children.toArray(children).forEach((child, index) => {
    //     if (React.isValidElement(child)) {
    //         childrenElement = [...childrenElement, ReactDOMServer.renderToStaticMarkup(child)];
    //         childrenElement = [...childrenElement, child];
    //     }
    // });
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <span>{heading}</span>
                <div className={styles.seeAll}>
                    <Link className={styles.link} to="/abc">
                        Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
            <div className={styles.content}>
                {children}
                <div className={`${styles.slideArrow} ${styles.leftArrow}`}>
                    <FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} />
                </div>
                <div className={`${styles.slideArrow} ${styles.rightArrow}`}>
                    <FontAwesomeIcon className={styles.arrow} icon={faAngleRight} />
                </div>
            </div>
            <div className = {styles.navigate}>
                <div className = {styles.item}></div>
                <div className = {`${styles.item} ${styles.chose}`}></div>
                <div className = {styles.item}></div>
                <div className = {styles.item}></div>
                <div className = {styles.item}></div>
            </div>
        </div>
    );
}

export default SlideShow;
