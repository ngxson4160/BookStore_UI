import { useContext, useEffect, useRef } from "react";
import { addRating } from "../../../../StoreState/Actions";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import styles from "./RatingArea.module.scss";
import RatingElement from "./Component/RatingCompenent";
import Context from "../../../../StoreState/Context";

function Rating() {
    const [, dispatch] = useContext(Context);
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const navigation = useNavigate();
    let ratingFiveStar = useRef();
    let ratingFourStar = useRef();
    let ratingThreeStar = useRef();

    let choseRating = (event) => {
        let id = event.currentTarget.id; //rating_5
        let ratingId = id.substring(id.indexOf("_") + 1); //5
        queryParams.rating = ratingId;
        if (event.currentTarget.classList.contains(styles.chose)) {
            event.currentTarget.classList.remove(styles.chose);
            queryParams.rating = undefined;
        } else {
            ratingFiveStar.current.classList.remove(styles.chose);
            ratingFourStar.current.classList.remove(styles.chose);
            ratingThreeStar.current.classList.remove(styles.chose);
            event.currentTarget.classList.add(styles.chose);
        }
        navigation({
            pathname: location.pathname,
            search: queryString.stringify(queryParams),
        });
    };

    useEffect(() => {
        dispatch(addRating(queryParams.rating));
        let elementRating = document.getElementById("rating_" + queryParams.rating);
        if (elementRating) elementRating.classList.add(styles.chose);
    }, [dispatch, queryParams.rating]);

    return (
        <div>
            <div id="rating_5" ref={ratingFiveStar} onClick={choseRating} className={`${styles.rating}}`}>
                <RatingElement star="5"></RatingElement>
            </div>
            <div id="rating_4" ref={ratingFourStar} onClick={choseRating} className={`${styles.rating}`}>
                <RatingElement star="4"></RatingElement>
            </div>
            <div id="rating_3" ref={ratingThreeStar} onClick={choseRating} className={`${styles.rating}`}>
                <RatingElement star="3"></RatingElement>
            </div>
        </div>
    );
}

export default Rating;
