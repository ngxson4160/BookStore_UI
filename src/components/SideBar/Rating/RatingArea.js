import { useContext, useRef } from "react";
import { addRating } from "../../../StoreState/Actions";

import styles from "./RatingArea.module.scss";
import RatingElement from "./Component/RatingCompenent";
import Context from "../../../StoreState/Context";

function Rating() {
    const [, dispatch] = useContext(Context);

    let ratingFiveStar = useRef();
    let ratingFourStar = useRef();
    let ratingThreeStar = useRef();

    let choseRating = (event) => {
        dispatch(addRating(event.currentTarget.id));
        if (event.currentTarget.classList.contains(styles.chose)) {
            event.currentTarget.classList.remove(styles.chose);
        } else {
            ratingFiveStar.current.classList.remove(styles.chose);
            ratingFourStar.current.classList.remove(styles.chose);
            ratingThreeStar.current.classList.remove(styles.chose);
            event.currentTarget.classList.add(styles.chose);
        }
    };

    return (
        <div>
            <div id="5" ref={ratingFiveStar} onClick={choseRating} className={`${styles.rating}}`}>
                <RatingElement star="5"></RatingElement>
            </div>
            <div id="4" ref={ratingFourStar} onClick={choseRating} className={`${styles.rating}`}>
                <RatingElement star="4"></RatingElement>
            </div>
            <div id="3" ref={ratingThreeStar} onClick={choseRating} className={`${styles.rating}`}>
                <RatingElement star="3"></RatingElement>
            </div>
        </div>
    );
}

export default Rating;
