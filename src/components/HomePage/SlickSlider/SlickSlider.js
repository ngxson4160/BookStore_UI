import styles from "./SlickSlider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function CustomArrowsLeft({ className, style, onClick }) {
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                // position: "absolute",
                // left: "0",
                // top: "50%",
                backgroundColor: "var(--lightGrey)",
                width: "35px",
                height: "65px",
                borderRadius: "0 6px 6px 0",
                background: "red",
                transform: "translateY(-50%)",
            }}
        >
            {/* <FontAwesomeIcon className={styles.arrow} icon={faAngleLeft} /> */}
        </div>
    );
}

function CustomArrowsRight({ className, style, onClick }) {
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                // position: "absolute",
                // left: "0",
                // top: "50%",
                backgroundColor: "var(--lightGrey)",
                width: "35px",
                height: "65px",
                borderRadius: "0 6px 6px 0",
                background: "red",
                transform: "translateY(-50%)",
            }}
        >
            <FontAwesomeIcon className={styles.arrow} icon={faAngleRight} />
        </div>
    );
}

function Dots() {
    return <div className={styles.dots}></div>;
}

function SlickSlider({ heading, children }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        appendDots: (dots) => (
            <div className={styles.dots}>
                <ul style={{ margin: "5px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className={styles.dots} onClick></div>,
        nextArrow: <CustomArrowsRight className={`${styles.slideArrow} ${styles.rightArrow}`} />,
        prevArrow: <CustomArrowsLeft className={`${styles.slideArrow} ${styles.leftArrow}`} />,
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <span>{heading}</span>
                <div className={styles.seeAll}>
                    <Link className={styles.link} to="/abc">
                        Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
            <div className={styles.content}>
                <Slider {...settings}>{children}</Slider>
            </div>
        </div>
    );
}

export default SlickSlider;
