import { faCartShopping, faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";

import styles from "./header.module.scss";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Header() {
    // const [showResultSearch, setShowResultSearch] = useState(true);
    const [showMenuUser, setShowRMenuUser] = useState(false);
    let navigation = useNavigate()
    let inputSearch = useRef()

    // const [isClick, setClickUser] = useState(false);
    var menuUserHoverIn = () => {
        let userElement = document.querySelector(`.${styles.user}`);
        if (!showMenuUser) {
            userElement.classList.add(styles.backgroundColor);
            userElement.addEventListener("click", (event) => {
                event.preventDefault();
            });
            setShowRMenuUser(!showMenuUser);
        }
    };

    var menuUserHoverOut = () => {
        let userElement = document.querySelector(`.${styles.user}`);
        if (showMenuUser) {
            userElement.classList.remove(styles.backgroundColor);
            setShowRMenuUser(!showMenuUser);
        }
        // if (isClick) return false;
    };

    // var test2 = function () {
    //     setShowResultSearch(false);
    // };

    let clickButtom = (event) => {
        if(!inputSearch.current?.value) return;
        navigation({
            pathname: "/search",
            search: `?q=${inputSearch.current?.value}`,
        });
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.searchArea}>
                    <Link to="/">
                        <div className={styles.logoMenu}></div>
                    </Link>

                    <div className={styles.search}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
                        {/* <Tippy
                            visible={showResultSearch}
                            render={(attrs) => (
                                <div style={{ width: "100%" }}>
                                    <RowLayout setBorderRadius="0" setWidth="940px" tabIndex="-1" {...attrs}>
                                        <a className={styles.linkItem} to="http://localhost:3001/">
                                            sfasfd
                                        </a>
                                    </RowLayout>
                                </div>
                            )}
                            trigger="click"
                            onClickOutside={test2}
                            interactive={true}
                            offset={"[0,0]"}
                        > */}
                            <input
                                type="text"
                                placeholder="Nhập tên sách hoặc tác giả muốn tìm kiếm"
                                spellCheck="false"
                                ref = {inputSearch}
                            />
                        {/* </Tippy> */}
                        <button onClick = {clickButtom}>Tìm kiếm</button>
                    </div>
                </div>
                <div className={styles.navArea}>
                    <a href="http://localhost:3001/" className={styles.navInner}>
                        <FontAwesomeIcon icon={faHouse} size="xl" />
                        <span>Trang chủ</span>
                        {/* <a href="http://localhost:3001/">Trang chủ</a> */}
                    </a>
                    <Tippy
                        render={(attrs) => (
                            <div className={styles.userMenu} tabIndex="-1" {...attrs}>
                                <Link className={styles.linkItem} to="http://localhost:3001/">
                                    Thông tin tài khoản
                                </Link>
                                <Link className={styles.linkItem} href="http://localhost:3001/">
                                    Đơn hàng của tôi
                                </Link>
                                <Link className={styles.linkItem} href="http://localhost:3001/">
                                    Đăng xuất
                                </Link>
                            </div>
                        )}
                        trigger="mouseenter"
                        hideOnClick={false}
                        onShow={menuUserHoverIn}
                        onHide={menuUserHoverOut}
                        delay={[0, 100]}
                        offset={[-42, 0]}
                        interactive={true}
                    >
                        <div className={`${styles.navInner} ${styles.user}`}>
                            <FontAwesomeIcon icon={faUser} size="xl" />
                            <span>Tài Khoản</span>
                        </div>
                    </Tippy>
                    <div className={`${styles.navInner} ${styles.cart}`}>
                        <FontAwesomeIcon icon={faCartShopping} size="xl" />
                        {/* <a href="http://localhost:3001/">Giỏ Hàng</a> */}
                        <div className={styles.cartAmount}>0</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
