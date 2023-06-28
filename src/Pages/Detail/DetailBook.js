import { useParams } from "react-router-dom";
import BookDetail from "../../components/DetailBook/BookDetail";
import Header from "../../components/Header/header";
import { useState, useEffect } from "react";
import bookService from "../../ApiService/BookService";
function DetailBook() {
    let id = useParams().id;
    // let dataAPI = useRef()
    const [dataAPI, setDataAPI] = useState([]);
    useEffect(() => {
        let getBookDetail = async () => {
            try {
                let result = await bookService.getBookDetail(id);
                setDataAPI(result.data.data[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getBookDetail();
    }, [id]);
    return (
        <>
            <Header />
            <BookDetail
                name={dataAPI.name}
                image={dataAPI.image}
                sold={dataAPI.sold}
                description={dataAPI.description}
                author={dataAPI.author}
                originalPrice={dataAPI.originalPrice}
                salePrice={dataAPI.salePrice}
                publisher={dataAPI.publisher}
                size={dataAPI.size}
                rating={dataAPI.rating}
            />
            {/* <div className={styles.wrapper}>
                
            </div> */}
        </>
    );
}

export default DetailBook;
