import { useRef, useContext } from "react";
import React from "react";

import styles from "./PriceFilter.module.scss";
import Context from "../../../StoreState/Context";
import { addPrice } from "../../../StoreState/Actions";

var priceFilter = [];

function PriceFilter() {
    // useContext
    const [, dispatch] = useContext(Context);

    let priceItem1 = useRef();
    let priceItem2 = useRef();
    let priceItem3 = useRef();
    let priceItem4 = useRef();

    let choseRating = (event) => {
        dispatch(addPrice(event.currentTarget.id));
        if (event.currentTarget.classList.contains(styles.chose)) {
            event.currentTarget.classList.remove(styles.chose);
        } else {
            priceItem1.current.classList.remove(styles.chose);
            priceItem2.current.classList.remove(styles.chose);
            priceItem3.current.classList.remove(styles.chose);
            priceItem4.current.classList.remove(styles.chose);
            event.currentTarget.classList.add(styles.chose);
        }
        // console.log(priceItem1);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <span id="0,50000" ref={priceItem1} className={styles.price} onClick={choseRating}>
                    Dưới 50.000
                </span>
            </div>
            <div className={styles.item}>
                <span id="50000,150000" ref={priceItem2} className={styles.price} onClick={choseRating}>
                    50.000 - 150.000
                </span>
            </div>
            <div className={styles.item}>
                <span id="150000,300000" ref={priceItem3} className={styles.price} onClick={choseRating}>
                    150.000 - 300.000
                </span>
            </div>
            <div className={styles.item}>
                <span id="300000,1000000000" ref={priceItem4} className={styles.price} onClick={choseRating}>
                    Trên 300.0000
                </span>
            </div>
        </div>
    );
}

export default PriceFilter;
export { priceFilter };
