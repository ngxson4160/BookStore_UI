import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Routes";
function App() {
    // var Component = publicRoutes[0].component
    return (
        <Router>
            <div className="App">
                <Routes>
                    {
                    // publicRoutes.map(function(publicRoutes, index){
                    //     const Component = publicRoutes.component;
                    //     return <Route key={index} path={publicRoutes.path} element={<Component />}></Route>;
                    // })
                    publicRoutes.map((publicRoutes, index) => {
                        const Page = publicRoutes.page;
                        return <Route key={index} path={publicRoutes.path} element={<Page />}></Route>;
                    }) 
                    }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
