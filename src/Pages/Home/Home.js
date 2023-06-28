import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../../components/Header/header";
import Menu from "../../components/Menu/menu";
import styles from "./Home.module.scss";
import SlideShow from "../../components/HomePage/SlideShow/SlideShow";
import Book from "../../components/AllBooks/Book/Book";
import SlickSlider from "../../components/HomePage/SlickSlider/SlickSlider";

function Home() {
    let isBookInContent = (bookPosition, contentPosition) => {
        if (
            bookPosition.left >= contentPosition.left &&
            bookPosition.right <= contentPosition.right &&
            bookPosition.top >= contentPosition.top &&
            bookPosition.bottom <= contentPosition.bottom
        ) {
            return true;
        } else {
            return false;
        }
    };
    useEffect(() => {
        let elementContent = document.querySelector(`.${styles.content}`);
        let positionContent = elementContent.getBoundingClientRect();
        let elementBooks = document.querySelectorAll(`.${styles.bookItem}`);
        // for(let i = 0; i < elementBooks.length;i++){
        //     if(isBookInContent())
        // }
        console.log(elementBooks[0]);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
    };
    return (
        <div>
            <Header></Header>
            <Menu></Menu>
            <SlickSlider  heading="test">
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
                <Book
                    className={styles.bookItem}
                    style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                    id={1234567}
                    img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                ></Book>
            </SlickSlider>
            <div className={styles.wrapper}>
                <SlideShow heading={"Sách mới về"}>
                    <Slider>
                        <div className="test">fadsssssssssffffffffff</div>
                        <div className="test">fadsssssssssffffffffff</div>
                        <div className="test">fadsssssssssffffffffff</div>
                    </Slider>
                </SlideShow>
                <SlideShow heading={"Bán chạy nhất"}>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                </SlideShow>
                <SlideShow heading={"Khuyến mại"}>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                </SlideShow>
                <SlideShow heading={"Sách trẻ em"}>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                </SlideShow>
                <SlideShow heading={"Tiểu thuyết"}>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                    <Book
                        className={styles.bookItem}
                        style={{ border: "1px solid rgba(39, 39, 42, 0.12)" }}
                        id={1234567}
                        img={"http://localhost:3000/uploads/2chotoixinmotvedituoitho-1686478585214-467555740.webp"}
                    ></Book>
                </SlideShow>

                {/* <div className={styles.homeCategory}>
                    <div className={styles.heading}>
                        <h4>Sách mới về</h4>
                        <div className={styles.seeAll}>
                            <Link className={styles.link} to="/">
                                Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.content}></div>
                </div>
                <div className={styles.homeCategory}>
                    <div className={styles.heading}>
                        <h4>Bán chạy nhất</h4>
                        <div className={styles.seeAll}>
                            <Link className={styles.link} to="/">
                                Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.content}></div>
                </div>
                <div className={styles.homeCategory}>
                    <div className={styles.heading}>
                        <h4>Khuyến mại</h4>
                        <div className={styles.seeAll}>
                            <Link className={styles.link} to="/">
                                Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.content}></div>
                </div>
                <div className={styles.homeCategory}>
                    <div className={styles.heading}>
                        <h4>Sách trẻ em</h4>
                        <div className={styles.seeAll}>
                            <Link className={styles.link} to="/">
                                Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.content}></div>
                </div>
                <div className={styles.homeCategory}>
                    <div className={styles.heading}>
                        <h4>Tiểu thuyết</h4>
                        <div className={styles.seeAll}>
                            <Link className={styles.link} to="/">
                                Xem thêm <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.content}></div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
