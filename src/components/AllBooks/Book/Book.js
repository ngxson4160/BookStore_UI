import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Book.module.scss";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Book({ id, img, name, rating, sold, originalPrice, salePrice, className, style }) {
    let h3Ref = useRef();
    useEffect(() => {
        if (h3Ref.current.offsetHeight < h3Ref.current.scrollHeight) {
            let content = h3Ref.current.textContent;
            while (h3Ref.current.offsetHeight < h3Ref.current.scrollHeight) {
                content = content.slice(0, -1);
                h3Ref.current.textContent = content + "...";
            }
        }
    }, []);
    return (
        <div className={`${styles.wrapper} ${className}`} style = {style}>
            <Link to={`/tat-ca/${id}`}>
                <div className={styles.thumbNail}>
                    <img src={img} alt="Book Thumbnail" />
                </div>
                <div className={styles.info}>
                    <h3 className={styles.name} ref={h3Ref}>
                        {name}
                    </h3>
                    <div className={styles.fullRating}>
                        <div className={styles.rating}>
                            {rating !== 0 ? (
                                <>
                                    <span>{rating !== 0 ? rating : "Chưa có đánh giá"}</span>
                                    <FontAwesomeIcon className={styles.star} icon={faStar} size="xs"></FontAwesomeIcon>
                                </>
                            ) : (
                                "Chưa có đánh giá"
                            )}
                        </div>
                        <div className={styles.sold}>Đã bán {sold}</div>
                    </div>
                    <div className={styles.priceAndDiscount}>
                        <div className={styles.salePrice}>{`${salePrice} ₫`}</div>
                        <div className={styles.originalPrice}>
                            <span>{salePrice < originalPrice ? `${originalPrice} ₫` : ""}</span>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={styles.addToCart}>
                <div className={styles.popper}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faCartShopping} size="1x" />
                        <span>Thêm Vào Giỏ</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Book;
