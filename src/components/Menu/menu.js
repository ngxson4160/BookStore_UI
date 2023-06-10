import Tippy from "@tippyjs/react/headless";
import styles from "./menu.module.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Menu() {
    const [showTippyAllBook, setShowTippyAllBook] = useState(false);
    var allBookHoverIn = () => {
        let userElement = document.querySelector(`.${styles.category}`);
        if (!showTippyAllBook) {
            userElement.classList.add(styles.backgroundColor);
            setShowTippyAllBook(!showTippyAllBook);
        }
    };

    var allBookHoverOut = () => {
        let userElement = document.querySelector(`.${styles.category}`);
        if (showTippyAllBook) {
            userElement.classList.remove(styles.backgroundColor);
            setShowTippyAllBook(!showTippyAllBook);
        }
        // if (isClick) return false;
    };
    return (
        <div className={styles.wrapper}>
            <nav className={styles.menu}>
                <Tippy
                    render={(attrs) => (
                        <div className={styles.allBook} tabIndex="-1" {...attrs}>
                            <Link className={styles.linkItem} to="/tat-ca/sach-tieng-anh">
                                Sách tiếng Anh
                            </Link>
                            <Link className={styles.linkItem} to="/tat-ca/truyen-tranh">
                                Truyện tranh
                            </Link>
                            <Link className={styles.linkItem} to="/tat-ca/tieu-thuyet">
                                Tiểu thuyết
                            </Link>
                            <Link className={styles.linkItem} to="/tat-ca/khoa-học, ki-thuat">
                                Khoa học & kĩ thuật
                            </Link>
                            <Link className={styles.linkItem} to="/tat-ca/kinh-te, xa-hoi">
                                Kinh tế & xã hội
                            </Link>
                        </div>
                    )}
                    trigger="mouseenter"
                    onShow={allBookHoverIn}
                    onHide={allBookHoverOut}
                    delay={[0, 100]}
                    offset={[49, 0]}
                    interactive={true}
                >
                    <Link to="/tat-ca" className={`${styles.inner} ${styles.category}`}>
                        Tất cả
                    </Link>
                </Tippy>
                <Link to="/" className={styles.inner}>
                    Mới nhất
                </Link>
                <Link to="/" className={styles.inner}>
                    Bán chạy
                </Link>
                <Link to="/" className={styles.inner}>
                    Khuyến mại
                </Link>
            </nav>
        </div>
    );
}

export default Menu;
