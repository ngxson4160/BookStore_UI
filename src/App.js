import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBooks from "./Pages/AllBooks/AllBooks";
import Home from "./Pages/Home/Home";
import DetailBook from "./Pages/Detail/DetailBook";
import Search from "./Pages/Search/Search";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tat-ca" element={<AllBooks />}></Route>
                <Route path="/tat-ca/:id" element={<DetailBook />}></Route>
                <Route path="/search" element={<Search />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
