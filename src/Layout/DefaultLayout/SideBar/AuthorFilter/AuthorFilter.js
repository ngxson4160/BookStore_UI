import { useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./AuthorFilter.module.scss";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import AuthorItem from "../CheckboxItem/CheckboxItem";
import authorService from "../../../../ApiService/AuthorSerive";
import Context from "../../../../StoreState/Context";
import { addAuthorId } from "../../../../StoreState/Actions";

import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

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
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const [showAll, setShowAll] = useState();
    const navigation = useNavigate();

    //Nếu totalAuthor <= limitItem thì show hết items, còn không chỉ show limitItem items
    const [totalAuthor, setTotalAuthor] = useState(0);
    var limitElement = [];
    var dataAPI = useRef();
    var authorList = [];
    var isShowButton;

    var clickCheckbox = (event) => {
        let id = event.target.id; //author_68
        let authorId = id.substring(id.indexOf("_") + 1); //68
        if (event.target.checked) {
            if (queryParams.author) {
                queryParams.author += "," + authorId;
            } else {
                queryParams.author = authorId;
            }
        } else {
            let authorIdList = queryParams.author.split(",");
            let indexAuthorId = authorIdList.indexOf(authorId);
            if (indexAuthorId !== -1) {
                authorIdList.splice(indexAuthorId, 1);
            }
            queryParams.author = authorIdList.join(',');
        }
        if (!queryParams.author) queryParams.author = undefined;
        navigation({
            pathname: location.pathname,
            search: queryString.stringify(queryParams),
        });
    };

    for (let i = 0; i < totalAuthor; i++) {
        authorList = [
            ...authorList,
            <AuthorItem
                id={"author_" + dataAPI.current[i].id}
                clickCheckbox={clickCheckbox}
                key={dataAPI.current[i].id}
            >
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
        dispatch(addAuthorId(queryParams.author));
        if (queryParams.author) {
            let listAuthor = queryParams.author.split(",");
            listAuthor.forEach((author) => {
                let elementAuthor = document.querySelector("#author_" + author);
                if (elementAuthor) elementAuthor.checked = true;
            });
        }

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
    }, [totalAuthor, dispatch, queryParams.author]);

    return (
        <div className={styles.wrapper}>
            {showAll ? authorList : limitElement}
            {isShowButton ? (
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
            )}
        </div>
    );
}

export default AuthorFilter;
