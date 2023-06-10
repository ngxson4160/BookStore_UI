import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./PublisherFilter.module.scss";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import PublisherItem from "../CheckboxItem/CheckboxItem";

function Toggler({ children, iconStyle, event }) {
    return (
        <div onClick={event} className={styles.toggler}>
            {children}
            <FontAwesomeIcon className={styles.icon} icon={iconStyle}></FontAwesomeIcon>
        </div>
    );
}

function PublisherFilter({limitItem }) {
    //Nếu amountPublisher <= limitItem thì show hết items, còn không chỉ show limitItem items
    var amountPublisher = 6;
    var limitElement = [];
    var publisherList = [];
    var isShowButton;

    const [showAll, setShowAll] = useState(amountPublisher <= limitItem);
    
    //fake data
    for(let i = 1; i <= amountPublisher; i++){
        publisherList = [...publisherList, <PublisherItem key = {i}>Nhà Xuất Bản {i}</PublisherItem>];
    }

    if (amountPublisher <= limitItem) {
        limitElement = publisherList;
        isShowButton = false;
    } else {
        isShowButton = true;
        for (let i = 0; i < limitItem; i++) {
            limitElement = [...limitElement, publisherList[i]];
        }
    }

    var clickToggler = () => {
        setShowAll(!showAll);
    };

    return (
        <div className={styles.wrapper}>
            {showAll ? publisherList : limitElement}
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


export default PublisherFilter;
