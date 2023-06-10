import AuthorFilter from "./AuthorFilter/AuthorFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import PublisherFilter from "./PublisherFilter/PublisherFilter";
import styles from "./sidebar.module.scss";
// import Rating from "./Rating/Rating";
import Rating from "./Rating/RatingArea";

function SideBar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.category}>
                <h4 className={styles.heading}>Danh mục sản phẩm</h4>
                <a href="/">Sách tiếng Anh</a>
                <a href="/">Truyện tranh</a>
                <a href="/">Tiểu thuyết</a>
                <a href="/">Khoa học & kĩ thuật</a>
                <a href="/">Kinh tế & xã hội</a>
            </div>
            <div className={styles.filter}>
                <h4 className={styles.heading}>Giá</h4>
                <PriceFilter limitItem="5" />
            </div>
            <div className={styles.filter}>
                <h4 className={styles.heading}>Đánh giá</h4>
                <Rating/>
            </div>
            <div className={styles.filter}>
                <h4 className={styles.heading}>Tác giả</h4>
                <AuthorFilter limitItem="5" />
            </div>
            <div className={styles.filter}>
                <h4 className={styles.heading}>Nhà xuất bản</h4>
                <PublisherFilter limitItem="5" />
            </div>
        </div>
    );
}

export default SideBar;
