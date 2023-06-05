import {useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AuthorFilter.module.scss";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import AuthorItem from "../CheckboxItem/CheckboxItem";
import authorService from "../../../ApiService/AuthorSerive";
import Context from "../../../StoreState/Context";
import { addAuthorId, deleteAuthorId } from "../../../StoreState/Actions";

function Toggler({ children, iconStyle, event }) {
    return (
        <div onClick={event} className={styles.toggler}>
            {children}
            <FontAwesomeIcon className={styles.icon} icon={iconStyle}></FontAwesomeIcon>
        </div>
    );
}

function AuthorFilter({ limitItem }) {

    const [, dispatch] = useContext(Context);
    const [showAll, setShowAll] = useState();
    
    //Nếu totalAuthor <= limitItem thì show hết items, còn không chỉ show limitItem items
    const [totalAuthor, setTotalAuthor] = useState(0);
    var limitElement = [];
    var dataAPI = useRef();
    var authorList = [];
    var isShowButton;

    var clickCheckbox = (event) => {
        if (event.target.checked) {
            dispatch(addAuthorId(event.target.id));
        } else {
            dispatch(deleteAuthorId(event.target.id));
        }
    };

    for (let i = 0; i < totalAuthor; i++) {
        authorList = [
            ...authorList,
            <AuthorItem id={dataAPI.current[i].id} clickCheckbox={clickCheckbox} key={dataAPI.current[i].id}>
                {dataAPI.current[i].name}
            </AuthorItem>,
        ];
    }

    if (totalAuthor <= limitItem) {
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

    useEffect(() => {
        var getListAuthor = async () => {
            try {
                let result = await authorService.getListAuthor();
                dataAPI.current = result.data.data;
                setTotalAuthor(result.data.total);
            } catch (error) {
                console.log(error);
            }
        };
        getListAuthor();
    }, []);
    
    return (
        <div className={styles.wrapper}>
            {showAll ? authorList : limitElement}
            {
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
