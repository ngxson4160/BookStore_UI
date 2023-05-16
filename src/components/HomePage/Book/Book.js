import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Book.module.scss";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Book({ img, name, rating, sold, price, discount }) {
    return (
        <div className={styles.wrapper}>
            <a href="/">
                <div className={styles.thumbNail}>
                    <img src={img} alt="Book Thumbnail" />
                </div>
                <div className={styles.info}>
                    <h3>{name}</h3>
                    <div className={styles.fullRating}>
                        <div className={styles.rating}>
                            <span>{rating}</span>
                            <FontAwesomeIcon className={styles.star} icon={faStar} size="xs"></FontAwesomeIcon>
                        </div>
                        <div className={styles.sold}>{sold}</div>
                    </div>
                    <div className={styles.priceAndDiscount}>
                        <div className={styles.price}>
                            {price}
                            <sup> ₫</sup>
                        </div>
                        <div className={styles.discount}>
                            <span>{(discount > 0) ? `${discount} %` : ''}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Book;
