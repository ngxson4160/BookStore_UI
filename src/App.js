import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBooks from "./Pages/AllBooks/AllBooks";
import Home from "./Pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/tat-ca" element={<AllBooks />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
