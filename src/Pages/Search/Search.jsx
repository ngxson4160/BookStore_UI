import { useEffect, useState } from "react";
import Book from "../../components/AllBooks/Book/Book";
import Header from "../../components/Header/header";
import styles from "./Search.module.scss";
import bookService from "../../ApiService/BookService";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

function Search() {
    const [listBook, setListBook] = useState();
    let location = useLocation();
    let queryParams = queryString.parse(location.search);
    
    useEffect(() => {
        let result;
        let getSearchBook = async () => {
            if (!queryParams.q) {
                console.log(true);
                return;
            }
            try {
                result = await bookService.search(queryParams.q);
                console.log(result);
                let bookArray = result?.data?.data.map((book) => {
                    return (
                        <Book
                            id={book.id}
                            key={book.id}
                            img={book.image[0]}
                            name={book.name}
                            rating={book.rating}
                            sold={book.sold}
                            originalPrice={book.originalPrice}
                            salePrice={book.salePrice}
                        />
                    );
                });
                setListBook(bookArray);
            } catch (error) {
                setListBook("Không tìm thấy kết quả phù hợp");
                console.log(error);
            }
        };
        getSearchBook();
    }, [queryParams]);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.title}>{`Kết quả cho "${queryParams.q}"`}</div>
            {listBook ? (
                <div className={styles.listProduct}>{listBook}</div>
            ) : (
                <div className = {styles.notFound}>Không tìm thấy kết quả phù hợp</div>
            )}
        </div>
    );
}

export default Search;
