import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Book.module.scss";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";

function Book({ img, name, rating, sold, originalPrice, salePrice }) {
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
                        <div className={styles.salePrice}>{`${salePrice} ₫`}</div>
                        <div className={styles.originalPrice}>
                            <span>{salePrice < originalPrice ? `${originalPrice} ₫` : ""}</span>
                        </div>
                    </div>
                </div>
            </a>
            <div className={styles.addToCart}>
                <div className={styles.popper}>
                    <a href="/">
                        <FontAwesomeIcon icon={faCartShopping} size="1x" />
                        <span>Thêm Vào Giỏ</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Book;
