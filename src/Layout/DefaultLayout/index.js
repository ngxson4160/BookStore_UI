import { Fragment } from "react";
import Header from "../../components/Header/header.js"
import SideBar from "../../components/SideBar/slidebar.js";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styles from "./DefaultLayout.module.scss";
function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header></Header>
            <div className={styles.wrapper}>
                <BreadCrumb></BreadCrumb>
                <div className={styles.content}>
                    <div className={styles.sideBar}>
                        <SideBar></SideBar>
                    </div>
                    <div className={styles.inner}>{children}</div>
                </div>
            </div>
        </Fragment>
    );
}

export default DefaultLayout;
