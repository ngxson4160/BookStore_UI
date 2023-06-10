import { Fragment } from "react";
import Header from "../../components/Header/header.js"
import SideBar from "./SideBar/slidebar.js";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import styles from "./DefaultLayout.module.scss";
import Menu from "../../components/Menu/menu.js";
function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header></Header>
            <Menu></Menu>
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
