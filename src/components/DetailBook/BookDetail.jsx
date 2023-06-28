import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./BookDetail.module.scss";
import { faPlus, faStar, faSubtract } from "@fortawesome/free-solid-svg-icons";

function BookDetail({name, image,sold, description,author, originalPrice, salePrice, publisher, size, rating}) {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoArea}>
                <div className={styles.image}>
                    <img
                        src={image}
                        alt="Book img"
                    ></img>
                </div>
                <div className={styles.info}>
                    <span>Tác giả: </span>
                    <span className={styles.author}>{author}</span>
                    <p className={styles.bookName}>{name}</p>
                    <div className={styles.ratingArea}>
                        <FontAwesomeIcon className={styles.rating} icon={faStar} />
                        <span className={styles.numberRating}>{rating}</span>
                        <span className={styles.totalRating}>(Xem 48 lượt đánh giá)</span>
                        {/* <span lassName={styles.rating}>4.8</span> */}
                        <span className={styles.totalSold}>{`Đã bán ${sold}`}</span>
                    </div>
                    <p className={styles.detailInfo}>Thông tin chi tiết</p>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.title}>Số trang</td>
                                <td className={styles.value}>{size}</td>
                            </tr>
                            <tr>
                                <td className={styles.title}>Nhà xuất bản</td>
                                <td className={`${styles.value} ${styles.highlight}`}>{publisher}</td>
                            </tr>
                            <tr>
                                <td className={styles.title}>Kích thước</td>
                                <td className={styles.value}>14 x 20.5 cm</td>
                            </tr>
                            <tr>
                                <td className={styles.title}>Công ty phát hành</td>
                                <td className={`${styles.value} ${styles.highlight}`}>Nhã Nam</td>
                            </tr>
                            <tr>
                                <td className={styles.title}>Dịch Giả</td>
                                <td className={styles.value}></td>
                            </tr>
                            <tr>
                                <td className={styles.title}>Loại bìa</td>
                                <td className={`${styles.value} ${styles.highlight}`}>Bìa cứng</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.priceAndDiscount}>
                        <div className={styles.salePrice}>{`${salePrice} ₫`}</div>
                        <div className={styles.originalPrice}>
                            <span>{salePrice < originalPrice ? `${originalPrice} ₫` : ""}</span>
                        </div>
                    </div>
                    <div className={styles.quantity}>
                        <p>Số lượng</p>
                        <button>
                            <FontAwesomeIcon icon={faSubtract} size="xl" />
                        </button>
                        <input type="text" value = "1"/>
                        <button>
                            <FontAwesomeIcon icon={faPlus} size="xl" />
                        </button>
                    </div>
                    <div className={styles.addToCart}>
                        <button type="submit">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
            <div className={styles.description}>
                <p className={styles.title}>Mô tả chi tiết</p>
                <p>{description}</p>
            </div>
            <div className={styles.comment}>
                <p className={styles.title}>Đánh giá sản phẩm</p>
            </div>
        </div>
    );
}

export default BookDetail;
