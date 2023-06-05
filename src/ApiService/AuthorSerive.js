import request from "../ultils/RequestApi";

class AuthorService {
    async getListAuthor() {
        let data;
        try {
            data = await request.get("authors");
        } catch (error) {
            console.log(error);
        }
        return data;
    }
}

let authorService = new AuthorService();
export default authorService;