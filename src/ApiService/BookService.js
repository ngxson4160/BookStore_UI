import request from "../ultils/RequestApi";

class BookService {
    async getBook(page = 1, author, rating, price) {
        let data;
        try {
            data = await request.get("books", {
                params: {
                    page,
                    author,
                    rating,
                    price,
                },
            });
        } catch (error) {
            console.log(error);
        }
        return data;
    }

    async getBookDetail(id) {
        let data;
        try {
            data = await request.get(`books/${id}`);
        } catch (error) {
            console.log(error);
        }
        return data;
    }

    async search(keyword) {
        let data;
        try {
            data= await request.get(`search/books?q=${keyword}`)
        }catch (error) {
            console.log(error);
        }
        return data;
    }
}

let bookService = new BookService();
export default bookService;
