import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AuthorFilter.module.scss";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import AuthorItem from "../CheckboxItem/CheckboxItem";

function Toggler({ children, iconStyle, event }) {
    return (
        <div onClick={event} className={styles.toggler}>
            {children}
            <FontAwesomeIcon className={styles.icon} icon={iconStyle}></FontAwesomeIcon>
        </div>
    );
}

function AuthorFilter({limitItem }) {
    //Nếu amountAuthor <= limitItem thì show hết items, còn không chỉ show limitItem items
    var amountAuthor = 6;
    var limitElement = [];
    var authorList = [];
    var isShowButton;

    const [showAll, setShowAll] = useState(amountAuthor <= limitItem);
    
    //fake data
    for(let i = 1; i <= amountAuthor; i++){
        authorList = [...authorList, <AuthorItem key = {i}>Nguyễn Nhật Ánh {i}</AuthorItem>];
    }

    if (amountAuthor <= limitItem) {
        limitElement = authorList;
        isShowButton = false;
    } else {
        isShowButton = true;
        for (let i = 0; i < limitItem; i++) {
            limitElement = [...limitElement, authorList[i]];
        }
    }

    var clickToggler = () => {
        setShowAll(!showAll);
    };

    return (
        <div className={styles.wrapper}>
            {showAll ? authorList : limitElement}
            {
                // isShowButton ? (showAll ? (<button>Thu gọn</button>) : (<button>Xem thêm</button>)) : (<span></span>)
                isShowButton ? (
                    showAll ? (
                        <Toggler event={clickToggler} iconStyle={faAngleUp}>
                            Rút gọn
                        </Toggler>
                    ) : (
                        <Toggler event={clickToggler} iconStyle={faAngleDown}>
                            Xem thêm
                        </Toggler>
                    )
                ) : (
                    <span></span>
                )
            }
        </div>
    );
}


export default AuthorFilter;
