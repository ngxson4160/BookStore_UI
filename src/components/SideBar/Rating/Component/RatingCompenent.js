import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RatingComponent.module.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Rating({star, choseRating, ref}) {
    useEffect(() => {
        let wrapper = document.querySelector(`.wrapper_star_${star}`);
        let restStarList = wrapper.querySelectorAll(`.star${star} ~ .${styles.star}`);
        Array.from(restStarList).forEach((restStar) => {
            restStar.classList.remove(`${styles.star}`);
        },)
    });
    return ( <div className = {`wrapper_star_${star} ${styles.wrapper}`} onClick = {choseRating}>
        <FontAwesomeIcon className = {`star1 ${styles.star}`} icon={faStar} />
        <FontAwesomeIcon className = {`star2 ${styles.star}`} icon={faStar} />
        <FontAwesomeIcon className = {`star3 ${styles.star}`} icon={faStar} />
        <FontAwesomeIcon className = {`star4 ${styles.star}`} icon={faStar} />
        <FontAwesomeIcon className = {`star5 ${styles.star}`} icon={faStar} />
        <span>từ {star} sao</span>
    </div> );
}

export default Rating;