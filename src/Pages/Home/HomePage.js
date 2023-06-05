import DefaultLayout from "../../Layout/DefaultLayout";
import styles from "./HomePage.module.scss";
import Sorter from "../../components/HomePage/Sort/Sorter";
import Book from "../../components/HomePage/Book/Book";
import NavigateBottom from "../../components/HomePage/NavigateBottom/NavigateBottom";
import bookService from "../../ApiService/BookService";
import { useContext, useEffect, useState } from "react";
import Context from "../../StoreState/Context";

function HomePage() {
    const [listBook, setListBook] = useState([]);
    const [stateGlobal, ] = useContext(Context);
    console.log(stateGlobal.price)
    useEffect(() => {
        var getListBook = async () => {
            let bookArray;
            try {
                let result = await bookService.getBook("1", stateGlobal.authorId, stateGlobal.rating, stateGlobal.price);
                bookArray = result.data.data.map((element) => {
                    return (
                        <Book
                            id={element.id}
                            key={element.id}
                            img={element.image[0]}
                            name={element.name}
                            rating={element.rating}
                            sold={element.sold}
                            salePrice={element.salePrice}
                            originalPrice={element.originalPrice}
                        />
                    );
                });
            } catch (error) {
                bookArray = ['Không tìm thấy kết quả phù hợp'];
                console.log(error);
            }
            setListBook(bookArray);
        };
        getListBook();
    }, [stateGlobal.authorId, stateGlobal.rating, stateGlobal.price]);

    return (
        <DefaultLayout>
            <div className={styles.wrapper}>
                <h2 className={styles.heading}>Tất Cả Sản Phẩm</h2>
                <Sorter currentPage="1" amountPage="5" />
                <div className={styles.listProduct}>
                    {listBook}
                </div>
                <NavigateBottom amountPage="50"></NavigateBottom>
            </div>
        </DefaultLayout>
    );
}

export default HomePage;
