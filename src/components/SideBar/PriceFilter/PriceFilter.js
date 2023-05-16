import { useEffect, useRef, useState } from "react";
import React from "react";

import styles from "./PriceFilter.module.scss";
import PriceItem from "../CheckboxItem/CheckboxItem";

var priceFilter = [];

function PriceFilter() {
    const [showAll, setShowAll] = useState(true);
    const showAllElement = useRef();
    const checkItemList = useRef();
    
    useEffect(() => {
        showAllElement.current = document.querySelector("#checkAll");
        checkItemList.current = document.querySelectorAll(".checkItem");
        if (showAll) {
            priceFilter = ["Tất cả"];
            showAllElement.current.checked = true;
            Array.from(checkItemList.current).forEach((item) => (item.checked = false));
        } else {
            showAllElement.current.checked = false;
        }
    }, [showAll]);

    var ClickShowAll = (event) => {
        event.target.checked = true;
        setShowAll(true);
    };

    var ClickItemPrice = (event) => {
        let itemIsCheck = false;
        Array.from(checkItemList.current).forEach((item) => {
            if (item.checked) itemIsCheck = true;
        });
        if (itemIsCheck) {
            let index = priceFilter.indexOf("Tất cả");
            if (index !== -1) {
                priceFilter.splice(index, 1);
            }
            setShowAll(false);
        } else {
            setShowAll(true);
        }


        //Lấy giá trị filter
        let idItemCheck = event.target.id;
        let valueCheckbox = document.querySelector(`#${idItemCheck} + span`).innerText;
        if (event.target.checked) {
            priceFilter = [...priceFilter, valueCheckbox];
        } else {
            let index = priceFilter.indexOf(valueCheckbox);
            if (index !== -1) {
                priceFilter.splice(index, 1);
            }
        }
        console.log(priceFilter)
    };

    return (
        <div className={styles.wrapper}>
            <PriceItem id="checkAll" clickCheckbox={ClickShowAll}>
                Tất cả
            </PriceItem>
            <PriceItem id="checkItem-1" className="checkItem" clickCheckbox={ClickItemPrice}>
                Dưới 50.000
            </PriceItem>
            <PriceItem id="checkItem-2" className="checkItem" clickCheckbox={ClickItemPrice}>
                Từ 50.000 - 150.000
            </PriceItem>
            <PriceItem id="checkItem-3" className="checkItem" clickCheckbox={ClickItemPrice}>
                Từ 150.000 - 300.000
            </PriceItem>
            <PriceItem id="checkItem-4" className="checkItem" clickCheckbox={ClickItemPrice}>
                Trên 300.0000
            </PriceItem>
        </div>
    );
}

export default PriceFilter;
export { priceFilter };
